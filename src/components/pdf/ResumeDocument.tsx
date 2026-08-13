// src/components/pdf/ResumeDocument.tsx
import { Page, Text, View, Document, StyleSheet, Link, Image } from "@react-pdf/renderer";
import { profileData, Experience, Course } from "@/data/profile";

const colors = {
  ink: "#0f172a",
  headerBg: "#0b0f12",
  headerGreen: "#4ade80",
  headerAmber: "#fbbf24",
  green: "#15803d",
  amber: "#b45309",
  text: "#374151",
  textLight: "#6B7280",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
  border: "#E2E8F0",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: colors.white,
    fontFamily: "Helvetica",
    paddingBottom: 65,
    paddingTop: 50,
  },

  // Cabeçalho estilo terminal
  header: {
    backgroundColor: colors.headerBg,
    marginTop: -50,
    marginHorizontal: -50,
    marginBottom: 22,
    paddingTop: 40,
    paddingBottom: 26,
    paddingHorizontal: 80,
  },
  terminalBar: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 4 },
  terminalPath: { fontFamily: "Courier", fontSize: 8.5, color: colors.headerGreen, marginLeft: 6 },

  headerName: { fontFamily: "Courier-Bold", fontSize: 22, color: colors.white, letterSpacing: 0.5 },
  headerRole: { fontFamily: "Courier", fontSize: 10.5, color: colors.headerAmber, marginTop: 6 },
  headerContact: { flexDirection: "row", flexWrap: "wrap", gap: 14, marginTop: 16 },
  link: { fontFamily: "Courier", color: colors.headerGreen, fontSize: 9, textDecoration: "none" },

  qrBacking: {
    position: "absolute",
    top: 26,
    right: 30,
    width: 58,
    height: 58,
    backgroundColor: colors.white,
    borderRadius: 4,
  },
  qrCode: {
    position: "absolute",
    top: 30,
    right: 34,
    width: 50,
    height: 50,
    zIndex: 100,
  },

  smallHeader: {
    position: "absolute",
    top: 20,
    left: 40,
    right: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallHeaderText: { fontFamily: "Courier", fontSize: 8.5, color: colors.textLight },

  body: { padding: 30 },

  section: { marginBottom: 18 },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
  },
  sectionTitleBullet: { width: 7, height: 7, backgroundColor: colors.green, marginRight: 7 },
  sectionTitle: { fontFamily: "Courier-Bold", fontSize: 11.5, color: colors.ink, textTransform: "uppercase", letterSpacing: 0.5 },

  text: { fontSize: 10, lineHeight: 1.6, color: colors.text, textAlign: "justify" },
  subTitle: { fontSize: 10.5, fontWeight: "bold", color: colors.ink },
  date: { fontFamily: "Courier", fontSize: 8.5, color: colors.textLight, marginBottom: 2 },

  skillContainer: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 4 },
  skillBadge: {
    fontFamily: "Courier",
    backgroundColor: colors.bgLight,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontSize: 8.5,
    color: colors.text,
  },

  itemRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  itemContainer: { marginBottom: 9, wrap: false },

  credentialLink: { fontFamily: "Courier", fontSize: 8.5, color: colors.green, marginTop: 2 },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { fontFamily: "Courier", color: colors.textLight, fontSize: 8 },
});

const SectionTitle = ({ children }: { children: string }) => (
  <View style={styles.sectionTitleRow}>
    <View style={styles.sectionTitleBullet} />
    <Text style={styles.sectionTitle}>{children}</Text>
  </View>
);

interface ResumeDocumentProps {
  qrCodeUrl?: string;
}

export const ResumeDocument = ({ qrCodeUrl }: ResumeDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header Fixo (Páginas 2+) */}
      <View style={styles.smallHeader} fixed>
        <Text style={styles.smallHeaderText} render={({ pageNumber }) => (
          pageNumber > 1 ? `${profileData.name} - Currículo` : ''
        )} />
        <Text style={styles.smallHeaderText} render={({ pageNumber }) => (
          pageNumber > 1 ? 'Continuação' : ''
        )} />
      </View>

      {/* Cabeçalho estilo terminal */}
      <View style={styles.header}>
        <View style={styles.terminalBar}>
          <View style={[styles.dot, { backgroundColor: "#ef4444" }]} />
          <View style={[styles.dot, { backgroundColor: colors.headerAmber }]} />
          <View style={[styles.dot, { backgroundColor: colors.headerGreen }]} />
          <Text style={styles.terminalPath}>gabriel@resume:~$</Text>
        </View>

        <Text style={styles.headerName}>{profileData.name}</Text>
        <Text style={styles.headerRole}>{profileData.role}</Text>

        <View style={styles.headerContact}>
          <Link src={`mailto:${profileData.email}`} style={styles.link}>{profileData.email}</Link>
          <Text style={{ color: colors.headerGreen }}>|</Text>
          <Link src={profileData.linkedin} style={styles.link}>LinkedIn</Link>
          <Text style={{ color: colors.headerGreen }}>|</Text>
          <Link src={profileData.github} style={styles.link}>GitHub</Link>
          <Text style={{ color: colors.headerGreen }}>|</Text>
          <Text style={styles.link}>{profileData.location}</Text>
        </View>
      </View>

      <View style={styles.body}>

        <View style={styles.section}>
          <SectionTitle>Resumo</SectionTitle>
          <Text style={styles.text}>{profileData.about}</Text>
        </View>

        <View style={styles.section}>
          <SectionTitle>Competências Técnicas</SectionTitle>
          {profileData.skills.map((category) => (
            <View key={category.category} style={{ marginBottom: 8 }} wrap={false}>
              <Text style={{ fontFamily: "Courier-Bold", fontSize: 9.5, color: colors.green, marginBottom: 4 }}>
                {category.category}
              </Text>
              <View style={styles.skillContainer}>
                {category.skills.map(skill => (
                  <Text key={skill} style={styles.skillBadge}>[{skill}]</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>Experiência Profissional</SectionTitle>
          {profileData.experiences?.map((exp: Experience, index: number) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{exp.company}</Text>
                <Text style={styles.date}>{exp.period}</Text>
              </View>
              <Text style={{ fontSize: 10, fontStyle: "italic", marginBottom: 2, color: colors.text }}>{exp.role}</Text>
              {exp.description && <Text style={styles.text}>{exp.description}</Text>}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>Projetos Relevantes</SectionTitle>
          {profileData.projects.map((project, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{project.title}</Text>
                {project.repoLink && (
                  <Link src={project.repoLink} style={{ fontFamily: "Courier", fontSize: 8.5, color: colors.green }}>[ ver código ]</Link>
                )}
              </View>
              <Text style={styles.text}>{project.description}</Text>
              <Text style={{ fontFamily: "Courier", fontSize: 8.5, color: colors.textLight, marginTop: 2 }}>
                {project.tags.map(t => `[${t}]`).join(" ")}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle>Formação Acadêmica</SectionTitle>
          {profileData.education.map((edu, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{edu.institution}</Text>
                <Text style={styles.date}>{edu.period}</Text>
              </View>
              <Text style={styles.text}>{edu.degree}</Text>
            </View>
          ))}
        </View>

        {profileData.achievements && profileData.achievements.length > 0 && (
          <View style={styles.section}>
            <SectionTitle>Conquistas</SectionTitle>
            {profileData.achievements.map((ach) => (
              <View key={ach.id} style={styles.itemContainer} wrap={false}>
                <View style={styles.itemRow}>
                  <Text style={styles.subTitle}>{ach.title} — {ach.issuer}</Text>
                  <Text style={styles.date}>{ach.date}</Text>
                </View>
                <Text style={styles.text}>{ach.description}</Text>
                {ach.credentialUrl && (
                  <Link src={ach.credentialUrl} style={styles.credentialLink}>[ ver credencial ]</Link>
                )}
              </View>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <SectionTitle>Cursos e Aperfeiçoamento</SectionTitle>
          {profileData.courses?.map((course: Course, index: number) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }} wrap={false}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold", color: colors.ink }}>• {course.title}</Text>
                <Text style={{ fontSize: 10, color: colors.textLight }}>| {course.institution}</Text>
              </View>
              <Text style={styles.date}>{course.duration}</Text>
            </View>
          ))}
        </View>

      </View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Gerado em {new Date().toLocaleDateString('pt-BR')} via gabrielmartielo.com.br
        </Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </View>

      {/* QR Code — desenhado por último para ficar por cima do header escuro */}
      {qrCodeUrl && (
        <>
          <View style={styles.qrBacking} />
          <Image src={qrCodeUrl} style={styles.qrCode} />
        </>
      )}

    </Page>
  </Document>
);
