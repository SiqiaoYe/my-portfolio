// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * See more pics.
 */

function more_img() {
    const imageIndex = Math.floor(Math.random() * 4) + 1;
    const imgUrl = 'imgs/cc' + imageIndex + '.jpeg';

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;

    const imageContainer = document.getElementById('random-image-container');
    // Remove the previous image.
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}

/**
 * Select the quarter to see my classes.
 */
function fa20() {
    let class1 = "CSE11: Introduction to Programming and Computational Problem-Solving: Accelerated Pace";

    document.getElementById("fa-20").innerText = class1;
}
function wi21() {
    let class1 = "CSE12: Basic Data Structures and Object-Oriented Design\nCSE15L: Software Tools and Techniques Laboratory";

    document.getElementById("wi-21").innerText = class1;
}
function sp21() {
    let class1 = "CSE30: Computer Organization and Systems Programming";

    document.getElementById("sp-21").innerText = class1;
}
