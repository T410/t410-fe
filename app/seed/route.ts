import bcrypt from "bcrypt";
import postgres from "postgres";
import { posts, projects } from "../lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedPosts() {
	await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      slug VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL
    );
  `;

	const insertedPosts = await Promise.all(
		posts.map(async ({ slug, title, content }) => {
			return sql`
        INSERT INTO posts (slug, title, content)
        VALUES (${slug}, ${title}, ${content})
        ON CONFLICT (id) DO NOTHING;
      `;
		}),
	);

	return insertedPosts;
}

async function seedProjects() {
	await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      source VARCHAR(255),
      demo VARCHAR(255)
    );
  `;

	const insertedProjects = await Promise.all(
		projects.map(
			({ name, description, source, demo }) => sql`
        INSERT INTO projects (name, description, source, demo)
        VALUES (${name}, ${description}, ${source}, ${demo})
        ON CONFLICT (id) DO NOTHING;
      `,
		),
	);

	return insertedProjects;
}

export async function GET() {
	try {
		const result = await sql.begin((sql) => [seedPosts(), seedProjects()]);

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
