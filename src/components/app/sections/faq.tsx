import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className="flex h-full w-full flex-col items-center gap-8 p-4">
      <p className="text-center text-3xl font-medium">Questions fréquentes</p>

      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Quel type de contrat recherches-tu ?
          </AccordionTrigger>
          <AccordionContent>
            En freelance je n&quot;accepte que les missions avec une durée
            supérieure à 3 mois.
            <br />
            <br />
            Je suis également ouvert pour un poste en CDI, n&quot;hésitez pas à
            me contacter pour en discuter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Sur quel stack technique travailles-tu ?
          </AccordionTrigger>
          <AccordionContent>
            Mes frameworks de prédilections sont : React.js, Next.js,
            TypeScript, Node.js, Nest.js, MongoDB, PostgreSQL, Tailwind CSS,
            Sass.
            <br />
            <br />
            Je suis ouvert à d&quot;autres technologies, n&quot;hésitez pas à me
            faire part de votre stack technique.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Avec quel type d&quot;entreprise travailles-tu ?
          </AccordionTrigger>
          <AccordionContent>
            Je collabore avec des entreprises de toutes envergures, qu&quot;il
            s&quot;agisse de startups en phase de croissance ou de grandes
            entreprises.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Quelle est ta prétention salariale ?
          </AccordionTrigger>
          <AccordionContent>
            Pour une mission en freelance, mon taux journalier moyen (TJM) est
            de 400€.
            <br />
            <br />
            Pour un poste en CDI, ma prétention salariale est de 45.000€ brut
            par an.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export { FAQ }
