import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "",
        timestamp: 1738720994,
        expirationTime: 1746496994
      },
      signature: "84d120bfb0354aee200365bd38c3075e9e845e8f158a03e84e99e1b6b6e033896c999455e1bf6c11ef7f4c765c6319602ca212deca3bc4e3ab0572dcdf48c4011c",
      signingKey: "6315473fb532fb8951f71f8a0d382be90700de2d397c084837a862899b46ca64"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
