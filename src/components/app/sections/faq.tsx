import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ContactCard } from "@/components/app/cards/contact-card"

const FAQ = () => {
  return (
    <section className="flex h-full w-full flex-col items-center gap-16 p-4 py-16 sm:gap-32">
      <h2 className="text-center text-4xl font-semibold sm:text-5xl">
        Questions fréquentes
      </h2>

      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-base sm:text-xl">
              Quel type de contrat recherches-tu ?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            En freelance je n&apos;accepte que les missions avec une durée
            supérieure à 3 mois.
            <br />
            <br />
            Je suis également ouvert pour un poste en CDI, n&apos;hésitez pas à
            me contacter pour en discuter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-base sm:text-xl">
              Sur quel stack technique travailles-tu ?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            Mon langage de prédilection est le JavaScript, couplé avec
            TypeScript.
            <br />
            <br />
            Front-End : React.js / Next.js / TailwindCSS / Sass
            <br />
            Back-End : Node.js / Nest.js
            <br />
            BDD : Prisma, PostgreSQL, MongoDB, Firebase
            <br />
            Testing : Jest / Chai / Mocha
            <br />
            DevOps : AWS / GCP
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-start text-base sm:text-xl">
              Peux-tu utiliser d&apos;autres langages ou frameworks ?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            Bien sûr ! Je ne me limite pas au contraire je pense que c&apos;est
            une super façon d&apos;évoluer. Grâce à mon parcours j&apos;ai
            utilisé de divers langages pour mes projets, je peux m&apos;adapter
            rapidement à votre environnement de travail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <p className="text-base sm:text-xl">
              Avec quel type d&apos;entreprise travailles-tu ?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            Je collabore avec des entreprises de toutes envergures, qu&apos;il
            s&apos;agisse de startups en phase de croissance ou de grandes
            entreprises.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <ContactCard />
    </section>
  )
}

export { FAQ }
