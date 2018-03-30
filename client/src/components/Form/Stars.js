import React from "react";
import "./Stars.css";


export const Stars = props =>
<div class="starRating">
   <input class="star_rate" id="rating5" type="radio" name="rating" value="5"></input>
   <label for="rating5">5</label>
   <input class="star_rate" id="rating4" type="radio" name="rating" value="4"></input>
   <label for="rating4">4</label>
   <input class="star_rate" id="rating3" type="radio" name="rating" value="3"></input>
   <label for="rating3">3</label>
   <input class="star_rate" id="rating2" type="radio" name="rating" value="2"></input>
   <label for="rating2">2</label>
   <input class="star_rate" id="rating1" type="radio" name="rating" value="1"></input>
   <label for="rating1">1</label>
</div>