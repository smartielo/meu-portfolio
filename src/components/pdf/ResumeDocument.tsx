// src/components/pdf/ResumeDocument.tsx
import { Page, Text, View, Document, StyleSheet, Link, Image } from "@react-pdf/renderer";
import { profileData } from "@/data/profile";

const colors = {
  primary: "#1e3a8a", 
  secondary: "#3b82f6", 
  text: "#374151", 
  textLight: "#6B7280", 
  white: "#FFFFFF",
  bgLight: "#F3F4F6",
  border: "#E5E7EB"
};

const styles = StyleSheet.create({
  page: { 
    flexDirection: "column", 
    backgroundColor: "#FFFFFF", 
    fontFamily: "Helvetica",
    paddingBottom: 65,
    paddingTop: 50 
  },
  
  header: { 
    backgroundColor: colors.primary, 
    padding: 30,
    marginTop: -50,
    marginHorizontal: -50, 
    paddingTop: 60, 
    paddingHorizontal: 80, 
    marginBottom: 20,
    flexDirection: "column", 
    alignItems: "flex-start" 
  },
  
  // ESTILO DO QR CODE
  qrCode: {
    position: 'absolute',
    top: 35, 
    right: 40,
    width: 50,
    height: 50,
    zIndex: 100 // Garante prioridade visual
  },

  headerName: { fontSize: 26, fontWeight: "bold", color: colors.white, textTransform: "uppercase", letterSpacing: 1 },
  headerRole: { fontSize: 12, color: "#BFDBFE", marginTop: 4, fontWeight: "medium" },
  headerContact: { flexDirection: "row", flexWrap: "wrap", gap: 15, marginTop: 15 },
  link: { color: colors.white, fontSize: 10, textDecoration: "none" },

  smallHeader: {
    position: 'absolute',
    top: 20, 
    left: 40,
    right: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallHeaderText: { fontSize: 9, color: colors.textLight },

  body: { padding: 30 }, 

  section: { marginBottom: 20 },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: "bold", 
    color: colors.primary, 
    borderBottomWidth: 2, 
    borderBottomColor: colors.bgLight, 
    paddingBottom: 4, 
    marginBottom: 10,
    textTransform: "uppercase"
  },
  
  text: { fontSize: 10, lineHeight: 1.6, color: colors.text, textAlign: "justify" },
  subTitle: { fontSize: 11, fontWeight: "bold", color: "#111827" },
  date: { fontSize: 9, color: colors.textLight, marginBottom: 2 },
  
  skillContainer: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 4 },
  skillBadge: { 
    backgroundColor: colors.bgLight, 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 4, 
    fontSize: 9,
    color: colors.text 
  },

  itemRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  itemContainer: { marginBottom: 8, wrap: false }, 

  footer: {
    position: 'absolute',
    bottom: 25,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerText: { color: colors.textLight, fontSize: 8 }
  
});

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

      {/* Cabeçalho Azul Principal */}
      <View style={styles.header}>
        <Text style={styles.headerName}>{profileData.name}</Text>
        <Text style={styles.headerRole}>{profileData.role}</Text>
        
        <View style={styles.headerContact}>
          <Link src={`mailto:${profileData.email}`} style={styles.link}>{profileData.email}</Link>
          <Text style={{ color: colors.secondary }}>|</Text>
          <Link src={profileData.linkedin} style={styles.link}>LinkedIn</Link>
          <Text style={{ color: colors.secondary }}>|</Text>
          <Link src={profileData.github} style={styles.link}>GitHub</Link>
          <Text style={{ color: colors.secondary }}>|</Text>
          <Text style={styles.link}>{profileData.location}</Text>
        </View>
      </View>

      <View style={styles.body}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo</Text>
          <Text style={styles.text}>{profileData.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competências Técnicas</Text>
          {profileData.skills.map((category) => (
            <View key={category.category} style={{ marginBottom: 8 }} wrap={false}>
              <Text style={{ fontSize: 10, fontWeight: "bold", color: colors.primary, marginBottom: 4 }}>
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
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          {/* @ts-ignore */}
          {profileData.experiences?.map((exp: any, index: number) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{exp.company}</Text>
                <Text style={styles.date}>{exp.period}</Text>
              </View>
              <Text style={{ fontSize: 10, fontStyle: "italic", marginBottom: 2 }}>{exp.role}</Text>
              {exp.description && <Text style={styles.text}>{exp.description}</Text>}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos Relevantes</Text>
          {profileData.projects.map((project, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <Text style={styles.subTitle}>{project.title}</Text>
                {project.repoLink && (
                  <Link src={project.repoLink} style={{ fontSize: 9, color: colors.secondary }}>Ver Código</Link>
                )}
              </View>
              <Text style={styles.text}>{project.description}</Text>
              <Text style={{ fontSize: 9, color: colors.textLight, marginTop: 2 }}>
                Techs: {project.tags.join(" • ")}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos e Aperfeiçoamento</Text>
          {/* @ts-ignore */}
          {profileData.courses?.map((course: any, index: number) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }} wrap={false}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>• {course.title}</Text>
                <Text style={{ fontSize: 10, color: colors.textLight }}>| {course.institution}</Text>
              </View>
              <Text style={styles.date}>{course.duration}</Text>
            </View>
          ))}
        </View>

      </View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          Gerado em {new Date().toLocaleDateString('pt-BR')} via dev.gabrielmartielo.com.br
        </Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </View>

      {/* --- MUDANÇA CRÍTICA --- */}
      {/* O QR Code agora é o ÚLTIMO elemento, para ser desenhado POR CIMA do header azul */}
      {qrCodeUrl && (
        <Image src={qrCodeUrl} style={styles.qrCode} />
      )}

    </Page>
  </Document>
);