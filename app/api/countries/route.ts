import { NextResponse } from "next/server"

const AFRICA = [
  "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon",
  "Central African Republic","Chad","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Cote d’Ivoire",
  "Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana",
  "Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania",
  "Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Sao Tome and Principe","Senegal",
  "Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia",
  "Uganda","Zambia","Zimbabwe",
]

const OTHERS = [
  "Afghanistan","Albania","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","China",
  "Denmark","Finland","France","Germany","Greece","India","Indonesia","Ireland","Israel","Italy","Japan",
  "Malaysia","Mexico","Netherlands","New Zealand","Norway","Pakistan","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Saudi Arabia","Singapore","South Korea","Spain","Sweden","Switzerland",
  "Turkey","Ukraine","United Arab Emirates","United Kingdom","United States",
]

export async function GET() {
  return NextResponse.json(
    {
      africa: AFRICA,
      others: OTHERS,
      updatedAt: new Date().toISOString(),
    },
    { status: 200 }
  )
}