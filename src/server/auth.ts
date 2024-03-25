import GoogleProvider from "@auth/core/providers/google";
import type { SolidAuthConfig } from "@solid-mediakit/auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/database";

export const authOptions: SolidAuthConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
