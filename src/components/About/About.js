import React from 'react'
import PropTypes from 'prop-types'

import Social from 'components/elements/Social'
import Title from 'components/elements/Title'

import Main from './styles/Main'
import AvatarWrapper from './styles/AvatarWrapper'
import ProfilePic from './styles/ProfilePic'

const About = ({ data }) => (
  <>
    <Main>
      <AvatarWrapper>
        <ProfilePic
          fluid={data.imageOne.childImageSharp.fluid}
          alt="Peter Szabo"
          style={{ position: 'absolute' }}
        />
        <Title className="title">About Me</Title>
      </AvatarWrapper>
      <p>
        Post-ironic iPhone ennui food truck deep v. Freegan quinoa unicorn
        fingerstache franzen. Raw denim truffaut pour-over occupy, chicharrones
        stumptown air plant. Glossier forage cornhole iceland iPhone. Salvia
        beard etsy kickstarter street art. Lyft echo park intelligentsia
        post-ironic raclette keytar 3 wolf moon kogi PBR&B chambray. Mumblecore
        tacos vinyl church-key typewriter palo santo.
      </p>
      <p>
        Tousled occupy health goth, cray kombucha lomo ugh raw denim authentic
        fixie pitchfork. Kinfolk ramps roof party tousled hoodie, paleo palo
        santo marfa raclette pork belly franzen poke microdosing flexitarian
        skateboard. Lo-fi succulents flannel, +1 man bun stumptown 3 wolf moon
        poutine salvia. Cornhole waistcoat freegan, humblebrag tofu knausgaard
        art party tumeric distillery messenger bag squid vegan austin.
        Fingerstache brunch hexagon williamsburg meggings.
      </p>
      <p>
        Knausgaard man braid adaptogen, disrupt copper mug everyday carry
        pour-over farm-to-table thundercats meggings hashtag chicharrones enamel
        pin kinfolk. Disrupt trust fund craft beer cronut iceland DIY
        farm-to-table actually. Artisan polaroid tousled actually, fanny pack
        8-bit forage VHS seitan tumblr scenester jean shorts post-ironic
        waistcoat. Microdosing ramps umami fashion axe gentrify
      </p>
      <p>
        Bushwick trust fund franzen taxidermy authentic. Selfies plaid man bun
        distillery next level normcore actually typewriter polaroid cred.
        Cardigan narwhal blue bottle vinyl kickstarter 90's edison bulb pork
        belly art party pour-over knausgaard offal asymmetrical tofu. IPhone
        meggings deep v williamsburg vaporware, dreamcatcher knausgaard XOXO.
        Post-ironic lyft occupy, man bun umami four dollar toast drinking
        vinegar snackwave messenger bag beard kickstarter.
      </p>
      <p>
        Blog lyft organic meditation, brunch man braid hot chicken tofu
        asymmetrical forage adaptogen cloud bread skateboard tacos palo santo.
        Authentic next level normcore subway tile cardigan. Adaptogen echo park
        fingerstache swag ugh subway tile meditation. Disrupt occupy yuccie
        trust fund pickled. Whatever prism VHS, raclette church-key butcher
        succulents woke celiac small batch swag godard authentic. Brunch deep v
        fanny pack wolf, chambray ugh taiyaki tumeric portland skateboard
        activated charcoal kickstarter marfa williamsburg lo-fi. Readymade
        biodiesel kombucha enamel pin, bespoke next level direct trade kitsch
        pitchfork banjo fixie. Oh. You need a little dummy text for your mockup?
        How quaint.
      </p>
    </Main>
    <Social type="col" />
  </>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
