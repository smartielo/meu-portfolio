import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { ResumeDocument } from "@/components/pdf/ResumeDocument";

export async function GET() {
  const qrCodeUrl = await QRCode.toDataURL("https://www.gabrielmartielo.com.br");
  const pdf = await renderToBuffer(<ResumeDocument qrCodeUrl={qrCodeUrl} />);

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Curriculo_Gabriel_Martielo.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
