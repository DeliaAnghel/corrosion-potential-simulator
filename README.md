
# Corrosion Potential Simulator

An interactive web application developed using HTML, CSS, and JavaScript to make electrochemical corrosion concepts easier to understand through hands-on experimentation.

The application allows users to explore how different metals and chemical environments influence corrosion-related calculations, combining scientific theory with an interactive virtual laboratory.

## Features

- **Interactive Virtual Laboratory** – A visual representation of an electrochemical experiment with a digital multimeter.
- **Metal Selection** – Choose between six metals: Iron (Fe), Zinc (Zn), Aluminum (Al), Magnesium (Mg), Tin (Sn), and Nickel (Ni).
- **Chemical Environments** – Experiment with acidic (H₂SO₄), neutral (NaCl), and alkaline (NaOH) solutions.
- **Automatic Calculations** – Calculate corrosion potential, anodic overpotential, and cathodic overpotential based on the measured potential.
- **Input Validation** – Display error messages for invalid measurements or missing selections.
- **Dynamic Results** – Instantly display calculated values in an organized results table.
- **Educational Content** – Explore theoretical explanations, electrochemical reactions, and standard electrode potentials.
- **Reset Functionality** – Easily restart the experiment with new parameters.

## Technologies Used

- **HTML5** – Website structure and content
- **CSS3** – Layout, styling, and animations
- **JavaScript** – User interactions, input validation, and electrochemical calculations

## How It Works

1. Open the application and navigate to the **Test** section.
2. Select one of the six available metals.
3. Choose a chemical environment (acidic, neutral, or alkaline).
4. Enter the measured electrical potential (V).
5. Click **Simulate** to calculate the results.
6. View the corrosion potential and anodic/cathodic overpotentials in the results table.
7. Use **Reset** to start a new experiment.

## Calculations

The application uses the following equations:

**Corrosion Potential:**

εcor = Emeasured + 0.266 V

**Anodic Overpotential:**

ηa = εcor - E°metal

**Cathodic Overpotential:**

ηc = εcor - E°oxidizing agent

The calculations use predefined electrode potentials and a reference electrode correction of 0.266 V, following the equations used in the academic laboratory.

## Project Structure

```text
corrosion-potential-simulator/
├── index.html
├── teorie.html
├── experimenteaza.html
├── style.css
├── script.js
├── chemix.jpg
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Navigate through the theory and simulation sections.

No additional installations or dependencies are required.

## Project Background

This project was developed as part of an academic initiative for the Scientific Communications Session at the National University of Science and Technology POLITEHNICA Bucharest, May 2025.

The goal was to create an accessible educational tool that connects theoretical electrochemistry with interactive web development.

## Contributors

- Anghel Delia-Maria
- Ichim Raluca
- Mincă Maria-Alexandra

## Future Improvements

- Improved responsive design for mobile devices
- More interactive visualizations
- Additional metals and chemical environments
- Graphical comparisons of simulation results
