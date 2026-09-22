import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "askebirtadesse@gmail.com",
    subject: "New Customer Message",
    html: `<h2>New Customer Feedback </h2>
    <p> <strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong>${email}</p>
    <p> <strong>Message</strong> ${message}</p>`,
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json({ data });
}
