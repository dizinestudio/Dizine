import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return ai;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", company: "Dizine Studio" });
});

// AI Digital Consultation & Project Scope Generator API
app.post("/api/consultation", async (req, res) => {
  try {
    const { serviceType, projectGoal, budgetRange, timeline, requirements } = req.body;

    const gemini = getGeminiClient();
    if (!gemini) {
      // Fallback structured proposal if Gemini API key is not present
      return res.json({
        success: true,
        proposal: {
          title: `Custom ${serviceType || 'Digital Solution'} Blueprint`,
          summary: `Dizine Studio will design and build a high-performance solution tailored for: "${projectGoal || 'Digital Transformation'}".`,
          recommendedTechStack: ["React / Next.js", "Node.js Express", "Tailwind CSS", "Cloud Hosting (AWS/Vercel)", "SEO Optimization Suite"],
          estimatedTimeline: timeline || "3 - 5 Weeks",
          estimatedCostRange: budgetRange || "$500 - $1,500",
          keyDeliverables: [
            "Responsive Mobile-First UI/UX Design",
            "Speed-Optimized & Secure Web Codebase",
            "SEO Setup & Schema Tagging",
            "SSL & High-Speed Cloud Hosting",
            "30-Day Free Post-Launch Technical Support"
          ],
          aiStrategyTips: "Focus on conversion-oriented landing page design with clear calls to action, sub-second page loads, and localized keyword optimization."
        }
      });
    }

    const prompt = `You are the lead Principal Solutions Consultant at "Dizine Studio", a premier IT & Digital Solutions company specializing in:
1. Website Design (UI/UX)
2. Website Development (Fullstack React/Node/Modern web)
3. Graphics Designing (Branding, Logos, Visual Assets)
4. Hosting Services (Cloud, VPS, Managed Servers, SSL)
5. Digital Marketing (Meta Ads, Google Ads, Content Strategy)
6. SEO Optimization (Technical, On-Page, Off-Page, Keyword Strategy)

A prospective client is requesting an instant AI consultation. Here are their details:
- Services Interested In: ${Array.isArray(serviceType) ? serviceType.join(", ") : serviceType || "Website Development & SEO"}
- Primary Project Goal: ${projectGoal || "Build a high converting online presence"}
- Budget Range: ${budgetRange || "$500 - $2,000"}
- Preferred Timeline: ${timeline || "1 Month"}
- Specific Requirements / Description: ${requirements || "Clean modern UI with fast speed and mobile responsiveness"}

Please generate a structured, professional, inspiring proposal strategy in JSON format with exact keys:
{
  "title": "string (Catchy Project Strategy Title)",
  "summary": "string (2-3 sentences overview of how Dizine Studio will achieve this goal)",
  "recommendedTechStack": ["string array of 4-6 recommended technologies/tools"],
  "estimatedTimeline": "string (e.g., 3-4 Weeks)",
  "estimatedCostRange": "string (e.g., $750 - $1,800)",
  "keyDeliverables": ["string array of 5 concrete deliverables"],
  "aiStrategyTips": "string (3-4 bullet points or short paragraph of expert growth/tech recommendations)"
}`;

    const response = await gemini.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "";
    const parsedData = JSON.parse(responseText);

    return res.json({
      success: true,
      proposal: parsedData
    });
  } catch (error: any) {
    console.error("AI Consultation error:", error);
    // Return graceful default if error
    return res.json({
      success: true,
      proposal: {
        title: "Dizine Studio Custom IT Strategy",
        summary: "We will craft an end-to-end digital experience with responsive design, lightning-fast execution, and robust backend infrastructure.",
        recommendedTechStack: ["React 19", "Express.js", "Tailwind CSS", "High-Speed Managed Cloud", "SEO Automation"],
        estimatedTimeline: "3 to 4 Weeks",
        estimatedCostRange: "Custom Quote",
        keyDeliverables: [
          "Custom Figma UI/UX Prototypes",
          "Clean Mobile-First Responsive Code",
          "SEO Technical Audit & Meta Setup",
          "High-Speed SSL Web Hosting",
          "Dedicated Project Manager Support"
        ],
        aiStrategyTips: "Ensure continuous speed monitoring, structured data schemas for Google indexing, and intuitive lead capture forms."
      }
    });
  }
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  console.log("Inquiry Received at Dizine Studio:", { name, email, phone, service, message });
  return res.json({
    success: true,
    message: `Thank you, ${name}! Your inquiry for ${service || "Dizine Studio services"} has been received. Our team will contact you within 2 hours.`,
    referenceId: `DS-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dizine Studio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
