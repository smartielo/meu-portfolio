// src/components/pdf/ResumeDocument.tsx
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import { profileData, Experience, Course } from "@/data/profile";

const colors = {
  ink: "#172033",
  headerBg: "#F4F6FA",
  headerGreen: "#253B68",
  headerAmber: "#586A8F",
  green: "#253B68",
  amber: "#586A8F",
  text: "#3F495C",
  textLight: "#727B8C",
  white: "#FFFFFF",
  bgLight: "#F4F6FA",
  border: "#DCE1EA",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: colors.white,
    fontFamily: "Helvetica",
    paddingBottom: 56,
    paddingTop: 44,
  },

  header: {
    backgroundColor: colors.headerBg,
    marginTop: -44,
    marginHorizontal: -42,
    marginBottom: 24,
    paddingTop: 42,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerContent: {
    marginHorizontal: 84,
  },
  headerName: { fontFamily: "Helvetica-Bold", fontSize: 24, color: colors.ink, letterSpacing: -0.3 },
  headerRole: { fontSize: 10.5, color: colors.headerAmber, marginTop: 6, letterSpacing: 0.4 },
  headerContact: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 15, paddingRight: 70 },
  link: { color: colors.headerGreen, fontSize: 8.5, textDecoration: "none" },

  qrBacking: {
    position: "absolute",
    top: 35,
    right: 42,
    width: 54,
    height: 54,
    backgroundColor: colors.ink,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.ink,
    alignItems: "center",
    justifyContent: "center",
  },
  markInitials: { color: colors.white, fontFamily: "Helvetica-Bold", fontSize: 15, letterSpacing: 0.5 },
  markLabel: { color: "#C7D0E2", fontSize: 5.5, marginTop: 3, textTransform: "uppercase", letterSpacing: 0.6 },

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
  smallHeaderText: { fontSize: 8.5, color: colors.textLight },

  body: { paddingHorizontal: 30 },

  section: { marginBottom: 18 },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
  },
  sectionTitleBullet: { width: 3, height: 12, borderRadius: 1.5, backgroundColor: colors.green, marginRight: 8 },
  sectionTitle: { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: colors.ink, textTransform: "uppercase", letterSpacing: 0.9 },

  text: { fontSize: 10, lineHeight: 1.6, color: colors.text, textAlign: "justify" },
  subTitle: { fontSize: 10.5, fontWeight: "bold", color: colors.ink },
  date: { fontSize: 8.5, color: colors.textLight, marginBottom: 2 },

  skillContainer: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 4 },
  skillBadge: {
    backgroundColor: colors.bgLight,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
    fontSize: 8.5,
    color: colors.text,
  },

  itemRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  itemContainer: { marginBottom: 9, wrap: false },

  credentialLink: { fontSize: 8.5, color: colors.green, marginTop: 2 },

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
  footerText: { color: colors.textLight, fontSize: 8 },
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

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerName}>{profileData.name}</Text>
          <Text style={styles.headerRole}>{profileData.role}</Text>

          <View style={styles.headerContact}>
            <Link src={`mailto:${profileData.email}`} style={styles.link}>{profileData.email}</Link>
            <Text style={{ color: colors.textLight }}>•</Text>
            <Link src={profileData.linkedin} style={styles.link}>LinkedIn</Link>
            <Text style={{ color: colors.textLight }}>•</Text>
            <Link src={profileData.github} style={styles.link}>GitHub</Link>
            <Text style={{ color: colors.textLight }}>•</Text>
            <Text style={styles.link}>{profileData.location}</Text>
          </View>
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
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 9.5, color: colors.green, marginBottom: 4 }}>
                {category.category}
              </Text>
              <View style={styles.skillContainer}>
                {category.skills.map(skill => (
                  <Text key={skill} style={styles.skillBadge}>{skill}</Text>
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
          {profileData.projects.slice(0, 6).map((project, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{project.title}</Text>
                {project.repoLink && (
                  <Link src={project.repoLink} style={{ fontSize: 8.5, color: colors.green }}>Ver código</Link>
                )}
              </View>
              <Text style={styles.text}>{project.description}</Text>
              <Text style={{ fontSize: 8.5, color: colors.textLight, marginTop: 2 }}>
                {project.tags.join("  •  ")}
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
                  <Link src={ach.credentialUrl} style={styles.credentialLink}>Ver credencial</Link>
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

      {qrCodeUrl && (
        <View style={styles.qrBacking}>
          <Text style={styles.markInitials}>GM</Text>
          <Text style={styles.markLabel}>Portfólio</Text>
        </View>
      )}

    </Page>
  </Document>
);
