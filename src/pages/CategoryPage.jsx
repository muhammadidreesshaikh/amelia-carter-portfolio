import { useMemo, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloseRounded from "@mui/icons-material/CloseRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import AnimatedSection from "../components/AnimatedSection";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import { categoryProjects } from "../data/portfolioData";

export default function CategoryPage({ categoryKey }) {
  const category = categoryProjects[categoryKey];
  const [selected, setSelected] = useState(null);

  const motionConfig = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.55 },
      }),
    }),
    [],
  );

  if (!category) {
    return null;
  }

  const standardProjects = category.projects.filter(
    (project) => project.layout !== "banner",
  );
  const bannerProjects = category.projects.filter(
    (project) => project.layout === "banner",
  );

  return (
    <>
      <Seo
        title={`${category.title} | Amelia Carter Portfolio`}
        description={category.description}
      />

      <Box
        component="section"
        sx={{ position: "relative", py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 1,
              border: "1px solid rgba(255,255,255,0.08)",
              background: `linear-gradient(135deg, ${alpha(category.accent, 0.22)}, rgba(8,16,27,0.72) 45%, ${alpha(category.glow, 0.16)})`,
              backdropFilter: "blur(18px)",
              display: "grid",
              alignItems: "end",
              p: { xs: 4, md: 6 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                opacity: 0.24,
              }}
            />
            <Box sx={{ position: "relative", zIndex: 1, maxWidth: 840 }}>
              <Typography
                component={motion.span}
                variants={motionConfig}
                initial="hidden"
                animate="visible"
                custom={0.1}
                sx={{
                  display: "inline-flex",
                  px: 2,
                  py: 1,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: alpha("#ffffff", 0.06),
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "secondary.light",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Dedicated Portfolio
              </Typography>

              <Typography
                variant="h1"
                sx={{ mt: 2, fontSize: { xs: 50, md: 92 } }}
              >
                {category.title}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 760,
                  color: "text.secondary",
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.9,
                }}
              >
                {category.description}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <AnimatedSection>
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow={category.subtitle}
            title="Featured projects with expandable previews and animated presentation."
            description="Each image opens in a lightbox so visitors can inspect the design in a polished, distraction-free view."
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
              mt: 6,
            }}
          >
            {standardProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  component="div"
                  onClick={() => setSelected(project)}
                  sx={{
                    borderRadius: 1,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(8,16,27,0.78)",
                    overflow: "hidden",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <CardActionArea
                    onClick={() => setSelected(project)}
                    sx={{ height: "100%", display: "block" }}
                  >
                    {" "}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        minHeight: 320,
                        height: { xs: 320, sm: 380, md: 420 },
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "transform 0.4s ease",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                        "&:hover": { transform: "scale(1.03)" },
                      }}
                    >
                      {" "}
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.style.opacity = 1;
                        }}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                          opacity: 1,
                          transition: "opacity 0.3s ease",
                        }}
                      />{" "}
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 1,
                          pointerEvents: "none",
                          background: `radial-gradient(circle at top, ${alpha(project.accent, 0.12)}, transparent 42%), linear-gradient(180deg, transparent 58%, ${alpha("#040815", 0.42)})`,
                        }}
                      />{" "}
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          left: 18,
                          right: 18,
                          bottom: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          px: 2,
                          py: 1.5,
                          borderRadius: 1,
                          backgroundColor: alpha("#000000", 0.72),
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(16px)",
                        }}
                      >
                        {" "}
                        <Box>
                          {" "}
                          <Typography sx={{ fontWeight: 800 }}>
                            {" "}
                            {project.title}{" "}
                          </Typography>{" "}
                        </Box>{" "}
                        <ArrowForwardRounded />{" "}
                      </Box>{" "}
                    </Box>{" "}
                  </CardActionArea>
                </Card>
              </motion.div>
            ))}
          </Box>

          {bannerProjects.length > 0 ? (
            <Box sx={{ display: "grid", gap: 3, mt: 3 }}>
              {bannerProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <Card
                    component="div"
                    onClick={() => setSelected(project)}
                    sx={{
                      height: { xs: 180, sm: 240, md: 320 },
                      borderRadius: 1,
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(8,16,27,0.78)",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <CardActionArea
                      onClick={() => setSelected(project)}
                      sx={{ height: "100%", display: "block" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          minHeight: 180,
                          height: { xs: 180, sm: 240, md: 320 },
                          overflow: "hidden",
                          cursor: "pointer",
                          transition: "transform 0.4s ease",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                          "&:hover": { transform: "scale(1.03)" },
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = 1;
                          }}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: "block",
                            opacity: 1,
                            transition: "opacity 0.3s ease",
                            transform: "translateZ(0)", // 👈 ADD THIS LINE ONLY
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            pointerEvents: "none",
                            background: `radial-gradient(circle at top, ${alpha(project.accent, 0.1)}, transparent 42%), linear-gradient(180deg, transparent 62%, ${alpha("#040815", 0.35)})`,
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            zIndex: 2,
                            left: 0,
                            right: 0,
                            margin: "0 auto",
                            bottom: 18,
                            width: { xs: "70%", sm: "50%", md: "30%" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            px: 2,
                            py: 1.2,
                            borderRadius: 1,
                            backgroundColor: alpha("#000000", 0.72),
                            border: "1px solid rgba(255,255,255,0.08)",
                            backdropFilter: "blur(16px)",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: 800, textAlign: "left" }}
                          >
                            Click To View
                          </Typography>
                          <ArrowForwardRounded fontSize="small" />
                        </Box>
                      </Box>
                    </CardActionArea>
                  </Card>{" "}
                </motion.div>
              ))}
            </Box>
          ) : null}
        </Container>
      </AnimatedSection>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            background: "rgba(6,10,18,0.95)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          {selected ? (
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#050b14",
                  minHeight: { xs: 320, md: 520 },
                  maxHeight: "78vh",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={selected.image}
                  alt={selected.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "72vh",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <IconButton
                onClick={() => setSelected(null)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: alpha("#0a1322", 0.8),
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <CloseRounded />
              </IconButton>
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ fontSize: { xs: 28, md: 42 } }}>
                  {selected.title}
                </Typography>
                <Typography sx={{ mt: 1.2, color: "text.secondary" }}>
                  {selected.subtitle}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
