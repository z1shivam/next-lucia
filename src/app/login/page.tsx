import { LoginForm } from "@/components/auth/LoginForm";
import mongoConnect from "@/lib/mongoConnect";

export default async function LoginPage() {
  await mongoConnect();
  return (
    <section>
      <div>
        <LoginForm />
      </div>
    </section>
  );
}
