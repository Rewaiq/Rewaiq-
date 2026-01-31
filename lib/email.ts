import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWaitlistEmail(params: {
  to: string
  referralCode: string
}) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const link = `${appUrl}/?ref=${encodeURIComponent(params.referralCode)}`

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "Rewaiq <noreply@rewaiq.com.ng>",
    to: params.to,
    subject: "You’re on the Rewaiq waitlist 🎉",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Welcome to Rewaiq 🎉</h2>
        <p>Thanks for joining our waitlist. You’ll be among the first to get updates and early access.</p>
        <p><b>Your referral code:</b> ${params.referralCode}</p>
        <p>Invite friends with your link:</p>
        <p><a href="${link}">${link}</a></p>
        <hr/>
        <p style="font-size: 12px; color: #666;">If you didn’t request this, you can ignore this email.</p>
      </div>
    `,
  })
}
