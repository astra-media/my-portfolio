'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Container } from 'react-bootstrap'

const Home = () => {
  const searchParams = useSearchParams()
  const scrollTo = searchParams.get('scroll')

  const about = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const social = useRef(null)

  const executeScroll = (x) => {
    if (x == 'about') {
      about.current.scrollIntoView()
    }
    if (x == 'skills') {
      skills.current.scrollIntoView()
    }
    if (x == 'projects') {
      projects.current.scrollIntoView()
    }
    if (x == 'contact') {
      contact.current.scrollIntoView()
    }
    if (x == 'social') {
      social.current.scrollIntoView()
    }
  }

  useEffect(() => {
    if (scrollTo) {
      executeScroll(scrollTo)
    }
  }, [searchParams])

  return (
    <Container>
      <h1 className='title' ref={about}>
        About
      </h1>
      <p>
        Nulla ea esse sit velit culpa nostrud nulla esse duis aliqua dolore. Do
        consectetur dolore amet ad excepteur est duis veniam non nisi ea duis
        elit. Non sit aliquip laboris in incididunt dolor nulla irure id. Labore
        pariatur Lorem et pariatur in elit aliquip quis exercitation. Velit aute
        sunt commodo veniam reprehenderit aliqua eu ut. Ipsum irure eu nulla in
        aute fugiat incididunt qui minim laborum pariatur. Voluptate culpa
        fugiat aliquip tempor excepteur proident. Velit consequat consectetur
        labore elit Lorem esse aliqua ea tempor ad aliqua. Sint commodo
        consectetur mollit voluptate sint ad nulla elit. Proident labore laborum
        ipsum velit sit. Lorem incididunt veniam officia excepteur quis
        incididunt laborum mollit officia nostrud dolor laboris magna ullamco.
        Velit deserunt pariatur elit nostrud consectetur magna amet ad sit.
        Veniam aliqua proident dolore eiusmod culpa sunt aute Lorem minim in
        labore duis anim deserunt. Sit irure aliqua duis cillum consectetur nisi
        nulla nostrud. Adipisicing nulla non duis qui velit enim. Excepteur elit
        ex esse sunt laboris eiusmod ad adipisicing mollit consequat do dolor
        qui quis. Nostrud ut sint mollit exercitation ea sit. Fugiat laborum
        deserunt sit est irure amet adipisicing esse consequat. Sit mollit ipsum
        tempor sint labore mollit aute consequat occaecat aliquip enim excepteur
        reprehenderit labore. Aliqua sint qui aliqua quis exercitation est
        consequat proident ipsum voluptate. Do laborum cillum mollit sunt est
        pariatur culpa labore eiusmod ea sit aute. Sit aliqua dolore tempor in
        nulla consectetur cillum enim reprehenderit nulla laboris eu cillum
        reprehenderit. Pariatur sunt nulla labore occaecat enim. Minim ad
        aliquip labore culpa incididunt qui irure sit. Eiusmod id eu voluptate
        excepteur aute quis commodo officia incididunt. Mollit esse duis id
        officia id magna dolore reprehenderit aute culpa amet. Laborum non est
        tempor consectetur laboris exercitation sit aliquip. Mollit veniam amet
        ex voluptate duis ex minim anim. Ut ex dolore do esse dolor ad
        consequat. Occaecat incididunt Lorem aute excepteur duis commodo ullamco
        eiusmod. Dolore qui culpa ea non velit.
      </p>

      <br />
      <br />

      <h1 className='title' ref={skills}>
        Skills
      </h1>
      <p>
        Nulla ea esse sit velit culpa nostrud nulla esse duis aliqua dolore. Do
        consectetur dolore amet ad excepteur est duis veniam non nisi ea duis
        elit. Non sit aliquip laboris in incididunt dolor nulla irure id. Labore
        pariatur Lorem et pariatur in elit aliquip quis exercitation. Velit aute
        sunt commodo veniam reprehenderit aliqua eu ut. Ipsum irure eu nulla in
        aute fugiat incididunt qui minim laborum pariatur. Voluptate culpa
        fugiat aliquip tempor excepteur proident. Velit consequat consectetur
        labore elit Lorem esse aliqua ea tempor ad aliqua. Sint commodo
        consectetur mollit voluptate sint ad nulla elit. Proident labore laborum
        ipsum velit sit. Lorem incididunt veniam officia excepteur quis
        incididunt laborum mollit officia nostrud dolor laboris magna ullamco.
        Velit deserunt pariatur elit nostrud consectetur magna amet ad sit.
        Veniam aliqua proident dolore eiusmod culpa sunt aute Lorem minim in
        labore duis anim deserunt. Sit irure aliqua duis cillum consectetur nisi
        nulla nostrud. Adipisicing nulla non duis qui velit enim. Excepteur elit
        ex esse sunt laboris eiusmod ad adipisicing mollit consequat do dolor
        qui quis. Nostrud ut sint mollit exercitation ea sit. Fugiat laborum
        deserunt sit est irure amet adipisicing esse consequat. Sit mollit ipsum
        tempor sint labore mollit aute consequat occaecat aliquip enim excepteur
        reprehenderit labore. Aliqua sint qui aliqua quis exercitation est
        consequat proident ipsum voluptate. Do laborum cillum mollit sunt est
        pariatur culpa labore eiusmod ea sit aute. Sit aliqua dolore tempor in
        nulla consectetur cillum enim reprehenderit nulla laboris eu cillum
        reprehenderit. Pariatur sunt nulla labore occaecat enim. Minim ad
        aliquip labore culpa incididunt qui irure sit. Eiusmod id eu voluptate
        excepteur aute quis commodo officia incididunt. Mollit esse duis id
        officia id magna dolore reprehenderit aute culpa amet. Laborum non est
        tempor consectetur laboris exercitation sit aliquip. Mollit veniam amet
        ex voluptate duis ex minim anim. Ut ex dolore do esse dolor ad
        consequat. Occaecat incididunt Lorem aute excepteur duis commodo ullamco
        eiusmod. Dolore qui culpa ea non velit.
      </p>

      <br />
      <br />

      <h1 className='title' ref={projects}>
        Projects
      </h1>
      <p>
        Nulla ea esse sit velit culpa nostrud nulla esse duis aliqua dolore. Do
        consectetur dolore amet ad excepteur est duis veniam non nisi ea duis
        elit. Non sit aliquip laboris in incididunt dolor nulla irure id. Labore
        pariatur Lorem et pariatur in elit aliquip quis exercitation. Velit aute
        sunt commodo veniam reprehenderit aliqua eu ut. Ipsum irure eu nulla in
        aute fugiat incididunt qui minim laborum pariatur. Voluptate culpa
        fugiat aliquip tempor excepteur proident. Velit consequat consectetur
        labore elit Lorem esse aliqua ea tempor ad aliqua. Sint commodo
        consectetur mollit voluptate sint ad nulla elit. Proident labore laborum
        ipsum velit sit. Lorem incididunt veniam officia excepteur quis
        incididunt laborum mollit officia nostrud dolor laboris magna ullamco.
        Velit deserunt pariatur elit nostrud consectetur magna amet ad sit.
        Veniam aliqua proident dolore eiusmod culpa sunt aute Lorem minim in
        labore duis anim deserunt. Sit irure aliqua duis cillum consectetur nisi
        nulla nostrud. Adipisicing nulla non duis qui velit enim. Excepteur elit
        ex esse sunt laboris eiusmod ad adipisicing mollit consequat do dolor
        qui quis. Nostrud ut sint mollit exercitation ea sit. Fugiat laborum
        deserunt sit est irure amet adipisicing esse consequat. Sit mollit ipsum
        tempor sint labore mollit aute consequat occaecat aliquip enim excepteur
        reprehenderit labore. Aliqua sint qui aliqua quis exercitation est
        consequat proident ipsum voluptate. Do laborum cillum mollit sunt est
        pariatur culpa labore eiusmod ea sit aute. Sit aliqua dolore tempor in
        nulla consectetur cillum enim reprehenderit nulla laboris eu cillum
        reprehenderit. Pariatur sunt nulla labore occaecat enim. Minim ad
        aliquip labore culpa incididunt qui irure sit. Eiusmod id eu voluptate
        excepteur aute quis commodo officia incididunt. Mollit esse duis id
        officia id magna dolore reprehenderit aute culpa amet. Laborum non est
        tempor consectetur laboris exercitation sit aliquip. Mollit veniam amet
        ex voluptate duis ex minim anim. Ut ex dolore do esse dolor ad
        consequat. Occaecat incididunt Lorem aute excepteur duis commodo ullamco
        eiusmod. Dolore qui culpa ea non velit.
      </p>

      <br />
      <br />

      <h1 className='title' ref={contact}>
        Contact
      </h1>
      <p>
        Nulla ea esse sit velit culpa nostrud nulla esse duis aliqua dolore. Do
        consectetur dolore amet ad excepteur est duis veniam non nisi ea duis
        elit. Non sit aliquip laboris in incididunt dolor nulla irure id. Labore
        pariatur Lorem et pariatur in elit aliquip quis exercitation. Velit aute
        sunt commodo veniam reprehenderit aliqua eu ut. Ipsum irure eu nulla in
        aute fugiat incididunt qui minim laborum pariatur. Voluptate culpa
        fugiat aliquip tempor excepteur proident. Velit consequat consectetur
        labore elit Lorem esse aliqua ea tempor ad aliqua. Sint commodo
        consectetur mollit voluptate sint ad nulla elit. Proident labore laborum
        ipsum velit sit. Lorem incididunt veniam officia excepteur quis
        incididunt laborum mollit officia nostrud dolor laboris magna ullamco.
        Velit deserunt pariatur elit nostrud consectetur magna amet ad sit.
        Veniam aliqua proident dolore eiusmod culpa sunt aute Lorem minim in
        labore duis anim deserunt. Sit irure aliqua duis cillum consectetur nisi
        nulla nostrud. Adipisicing nulla non duis qui velit enim. Excepteur elit
        ex esse sunt laboris eiusmod ad adipisicing mollit consequat do dolor
        qui quis. Nostrud ut sint mollit exercitation ea sit. Fugiat laborum
        deserunt sit est irure amet adipisicing esse consequat. Sit mollit ipsum
        tempor sint labore mollit aute consequat occaecat aliquip enim excepteur
        reprehenderit labore. Aliqua sint qui aliqua quis exercitation est
        consequat proident ipsum voluptate. Do laborum cillum mollit sunt est
        pariatur culpa labore eiusmod ea sit aute. Sit aliqua dolore tempor in
        nulla consectetur cillum enim reprehenderit nulla laboris eu cillum
        reprehenderit. Pariatur sunt nulla labore occaecat enim. Minim ad
        aliquip labore culpa incididunt qui irure sit. Eiusmod id eu voluptate
        excepteur aute quis commodo officia incididunt. Mollit esse duis id
        officia id magna dolore reprehenderit aute culpa amet. Laborum non est
        tempor consectetur laboris exercitation sit aliquip. Mollit veniam amet
        ex voluptate duis ex minim anim. Ut ex dolore do esse dolor ad
        consequat. Occaecat incididunt Lorem aute excepteur duis commodo ullamco
        eiusmod. Dolore qui culpa ea non velit.
      </p>

      <br />
      <br />

      <h1 className='title' ref={social}>
        Resume & Github
      </h1>
      <p>
        Id culpa veniam ea culpa cupidatat. Fugiat irure et laborum occaecat
        ullamco labore consectetur ad. In labore laboris consectetur ex sint
        voluptate occaecat. Commodo ut deserunt excepteur tempor irure quis.
        Aliquip sunt sint id in culpa non eiusmod irure amet id nulla. Magna ea
        ut adipisicing mollit ipsum adipisicing tempor ut in consectetur. Non id
        anim aute ex in amet laboris. Do culpa est et Lorem velit commodo ipsum
        culpa enim dolor nulla dolore dolore sit. Pariatur esse ipsum incididunt
        est non magna quis non cupidatat voluptate. Irure adipisicing occaecat
        duis amet sit excepteur dolore ut cillum mollit proident. Occaecat
        fugiat ex occaecat deserunt.
      </p>
    </Container>
  )
}

export default Home
