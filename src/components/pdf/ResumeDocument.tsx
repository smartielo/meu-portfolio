// src/components/pdf/ResumeDocument.tsx
import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";
import { profileData } from "@/data/profile";

// Definindo estilos do PDF
const styles = StyleSheet.create({
  page: { flexDirection: "column", backgroundColor: "#FFFFFF", padding: 40, fontFamily: "Helvetica" },
  header: { marginBottom: 20, borderBottomWidth: 2, borderBottomColor: "#111827", paddingBottom: 10 },
  name: { fontSize: 24, fontWeight: "bold", textTransform: "uppercase", color: "#111827" },
  role: { fontSize: 12, color: "#4B5563", marginTop: 4 },
  contactInfo: { flexDirection: "row", gap: 10, fontSize: 10, marginTop: 8, color: "#6B7280" },
  section: { marginTop: 15, marginBottom: 10 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "#E5E7EB", paddingBottom: 4, marginBottom: 8, textTransform: "uppercase", color: "#374151" },
  text: { fontSize: 10, lineHeight: 1.5, color: "#374151", marginBottom: 4 },
  skillCategory: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
  skillLabel: { fontSize: 10, fontWeight: "bold", marginRight: 4 },
  projectTitle: { fontSize: 11, fontWeight: "bold", marginTop: 6 },
  projectLink: { fontSize: 9, color: "#2563EB", textDecoration: "none" },
});

export const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.role}>{profileData.role}</Text>
        <View style={styles.contactInfo}>
          <Text>{profileData.email}</Text>
          <Text>/</Text>
          <Text>{profileData.email2}</Text>
          <Text>•</Text>
          <Link src={profileData.linkedin} style={{ color: "#2563EB" }}>LinkedIn</Link>
          <Text>•</Text>
          <Link src={profileData.github} style={{ color: "#2563EB" }}>GitHub</Link>
        </View>
      </View>

      {/* Resumo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.text}>{profileData.headline}</Text>
        <Text style={styles.text}>{profileData.about}</Text>
      </View>

      {/* Experiência Profissional (NOVO) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        {/* @ts-ignore */}
        {profileData.experiences?.map((exp: any, index: number) => (
          <View key={index} style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>{exp.company}</Text>
            <Text style={{ fontSize: 10, color: "#374151" }}>{exp.role}</Text>
            <Text style={{ fontSize: 10, color: "#6B7280" }}>{exp.period}</Text>
          </View>
        ))}
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        {profileData.skills.map((category) => (
          <View key={category.category} style={styles.skillCategory}>
            <Text style={styles.skillLabel}>{category.category}:</Text>
            <Text style={styles.text}>{category.skills.join(", ")}</Text>
          </View>
        ))}
      </View>

      {/* Projetos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos em Destaque</Text>
        {profileData.projects.map((project, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Link src={project.repoLink} style={styles.projectLink}>Ver Projeto</Link>
            </View>
            <Text style={styles.text}>{project.description}</Text>
            <Text style={{ fontSize: 9, color: "#6B7280" }}>Stack: {project.tags.join(" • ")}</Text>
          </View>
        ))}
      </View>

      {/* Educação */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        {profileData.education.map((edu, index) => (
          <View key={index}>
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>{edu.institution}</Text>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={{ fontSize: 9, color: "#6B7280" }}>{edu.period}</Text>
            <Text><br /></Text>
          </View>
        ))}
      </View>

    </Page>
  </Document>
);