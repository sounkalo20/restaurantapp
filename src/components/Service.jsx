import React from "react";
import {GiFoodTruck} from "react-icons/gi"
import {BiFoodMenu} from "react-icons/bi"
import {MdFoodBank} from "react-icons/md"
import {GiOpenedFoodCan} from "react-icons/gi"

export default function Service() {
  return (
    <div class="container">
      <h2>Our Services</h2>
      <section class="services">
        <div class="card">
          <div class="content">
            <div class="icon">
              <GiFoodTruck />
            </div>
            <div class="title">livraison à domicile</div>
            <p>
              Les restaurants proposent la livraison de leurs plats 
              directement à votre porte, offrant ainsi la commodité de savourer leurs 
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="icon">
              <BiFoodMenu />
            </div>
            <div class="title">Service de restauration</div>
            <p>
              Une expérience culinaire complète dans le confort du restaurant. 
              Du moment où vous entrez jusqu'à votre départ. 
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="icon">
              <MdFoodBank />
            </div>
            <div class="title">Service traiteur</div>
            <p>
            Nous avons un service traiteur pour 
            les événements spéciaux tels que les mariages, les anniversaires, les réunions d'entreprise, etc.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="icon">
              <GiOpenedFoodCan />
            </div>
            <div class="title">Service de dégustation </div>
            <p>
            Nous offront des dégustations spéciales 
            où vous pouvez découvrir une variété de plats et de saveurs.
            </p>
          </div>
        </div>
        
      </section>
    </div>
  );
}
