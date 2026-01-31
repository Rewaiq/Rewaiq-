-- CreateEnum
CREATE TYPE "WaitlistRole" AS ENUM ('USER', 'CREATOR', 'ARTIST', 'BUSINESS');

-- CreateTable
CREATE TABLE "WaitlistSignup" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT,
    "phone" TEXT,
    "country" TEXT,
    "roles" "WaitlistRole"[],
    "heardFrom" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "referralCode" TEXT NOT NULL,
    "referredById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaitlistSignup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistSignup_email_key" ON "WaitlistSignup"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistSignup_referralCode_key" ON "WaitlistSignup"("referralCode");

-- CreateIndex
CREATE INDEX "WaitlistSignup_referralCode_idx" ON "WaitlistSignup"("referralCode");

-- CreateIndex
CREATE INDEX "WaitlistSignup_referredById_idx" ON "WaitlistSignup"("referredById");

-- AddForeignKey
ALTER TABLE "WaitlistSignup" ADD CONSTRAINT "WaitlistSignup_referredById_fkey" FOREIGN KEY ("referredById") REFERENCES "WaitlistSignup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
