-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT,
    "company_fk" TEXT,
    "container_name" TEXT,
    "members_root" TEXT,
    "patient_root" TEXT,
    "ref_root" TEXT,
    "dr_records_root" TEXT,
    "scaned_rpt_root" TEXT,
    "profile_img" TEXT,
    "Modified_Date" TIMESTAMP(3) NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Slug" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
