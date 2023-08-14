import Image from 'next/image'
import styles from './SectionOverview.module.css'
import { Link } from 'nextra-theme-docs'
import sectionData from '/data/sections'

const ProjectEntry = ({ name, imageSrc, url = null, disabled = false, description, imageProps = {} }) => (
  <div className={styles.projectEntry}>
    {imageSrc && <Image
      src={imageSrc}
      alt='alt'
      width={100}
      height={100}
      style={{
        borderRadius: '1rem',
        ...imageProps,
        marginBottom: '.5rem'
      }}
    />}
    <Link href={disabled ? '/' : url}
      className={`${styles.projectLink} ${disabled ? styles.disabled : ''}`}
      style={{
        fontWeight: 'bold',
        fontSize: '1.1rem'
      }}
    >{name}</Link>
    {!imageSrc && description && <p>
      {description}  
    </p>}
  </div>
)

export default function Projects() {
  return (
    <div className="mx-auto mb-10 w-[880px] max-w-full px-4 text-center">
      <div className={styles.projects}>
        {sectionData.map((section) => (<ProjectEntry
          key={section.name}
          name={section.name}
          imageSrc={section.imageUrl}
          description={section.description}
          disabled={section.disabled}
          url={section.url}
        />))}
      </div>
    </div>
  )
}
