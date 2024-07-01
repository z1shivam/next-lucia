import { RegisterForm } from "@/components/auth/RegisterForm";
import mongoConnect from "@/lib/mongoConnect";

export default async function LoginPage() {
  await mongoConnect();
  return (
    <section>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
}
