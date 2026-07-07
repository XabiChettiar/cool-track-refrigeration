import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email, message, productName } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const subject = productName ? `Quote Request - ${productName}` : "Quote Request"
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`

    const { data, error } = await resend.emails.send({
      from: "Cool Track Refrigeration <onboarding@resend.dev>",
      to: ["infocooltrack@yahoo.com"],
      reply_to: email,
      subject,
      text,
    })

    if (error) {
      console.error("Resend error:", error)
      return res.status(500).json({ error: "Failed to send email" })
    }

    return res.status(200).json({ success: true, id: data.id })
  } catch (error) {
    console.error("Failed to send quote email", error)
    return res.status(500).json({ error: "Something went wrong" })
  }
}