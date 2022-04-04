import React from 'react'
import bullet from '../../Asssets/aboutus/bullet.svg'
import Image from 'next/image'

const Quality = () => {
  return (
    <div className="container-fluid py-5 mt-5 bg-about-quality">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-lg-5 px-5">
            <h3 className="bold-font">Quality</h3>
            <p className="regular-font">
              L’arbre à karité est aussi appelé « arbre miracle » dans les pays
              qui en possèdent. En effet, toutes les parties de cet arbre
              peuvent être exploitées, et servent à la production d’autres
              produits, alimentaires, pharmaceutiques, cosmétiques ou autres.
            </p>
          </div>
          <div className="col-lg-7 px-5">
            <div className="d-flex align-items-start">
              <div className="bullet-about-quality mx-3">
                <Image src={bullet} alt="" width="30px" height="25px" />
              </div>
              <p className="regular-font">
                Les noix de karité contiennent des amandes, qui sont utilisées
                dans la médecine traditionnelle pour lutter contre le paludisme,
                et servent à la fabrication du beurre de karité.
              </p>
            </div>
            <div className="d-flex align-items-start">
            <div className="bullet-about-quality mx-3">
              <Image src={bullet} alt="" />
              </div>
              <p className="regular-font">
                La pulpe peut être consommée directement, préparée en confiture,
                ou utilisée pour la fabrication d’alcool. Elle est également
                utilisée pour l’alimentation animale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality
