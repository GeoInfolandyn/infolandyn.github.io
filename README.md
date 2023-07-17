# INFOLANDYN-project-
Repository: https://github.com/GeoInfolandyn/infolandyn.io

The main objective of the INFOLANDYN project is to design and implement an Information System that allows the development and provision of products related to the dynamics of the Earth's surface derived from time series of remote sensing, at different scales. To achieve this goal, a process of design and development of a web-based Information System will be carried out, which includes the selection and configuration of remote sensing tools, as well as the development of algorithms for the generation of products, among other relevant elements.


- Geo-Qubidy website: [https://blogs.upm.es/dynamicland/)
- Universidad Politécnica de Madrid (UPM) website: [https://www.upm.es/)
- Universidad Rey Juan Carlos (URJC) website: [https://www.urjc.es/)

The INFOLANDYN project is an initiative of the Research Group Geo-Qubidy of the “Universidad Politécnica de Madrid” (UPM), Spain, working in close collaboration with researchers from the “Universidad Rey Juan Carlos” (URJC).
The project aims to design and implement an Information System to generate remote sensing products that help understand the dynamics of the earth's surface in the context of global change. Phenological and dynamic indicators and products will be developed, and analyses and reports will be generated to communicate the results to end-users. The structure of the project will include elements such as system design, identification of indicators and products, data and product management, results analysis, and communication of findings.

## INSTRUCTIONS FOR DEVELOPMENT OR UPGRADE
If you would love to keep updating this template, please keep your codes in separate files (custom.css and custom.js) and avoid modifying the following:
- css/frame.css (CSS for the main frame of the website)
- css/controls.css (CSS for control elements that do not require JavaScript)
- css/widgets.css (CSS for widgets that require JavaScript)
- js/widgets.js (JavaScript for widgets)
- js/menu.js (JavaScript for loading the menu bar)

From version 3.0, the menu bar at the top is moved into a single file (menu.html) for better management. Each template page will now use jQuery to load the menu bar file (menu.js), as shown below:
```html
<script src="js/menu.js"></script>
```
This website is static-dynamic with user interactions supported in JavaScript Jquery, do not modify or copy the menu file code (menu.html) into the menu-container div of your html template.
```html
<div class="menu-container">
  [copy everything in the menu.html and paste the code here]
</div>
```
In this way, you can remove the script line that loads jQuery in the header of the html and also delete the files for loading the menu bar (menu.html and menu.js).

This template is tested and worked on:
- macOS Mojave
  - Chrome 77
  - Safari 12
  - Firefox 68
- Windows 10
  - Chrome 77
  - Firefox 68
  - Edge 44
- Android 7, 8, 9, and 10
  - Chrome 77
  - Firefox 68
- iOS 12 and 13
  - Chrome 77
  - Safari
  - Firefox 18

# Problems and Bugs
Here are the problems and bugs that I plan to address in the future. If you fixed them, please do not hesitate to send me a pull request, and I would be very grateful. Please also report problems and bugs in [GitHub Issues] (https://github.com/Alexanderariza/infolandyn.io/issues).

- On mobile Safari, the menu on the top will not close after opening it. This is because the menu icon on mobile Safari retains focus after a touch event, and the menu relies on the loss of focus event of the icon to close.

# Future Plans for Feature Enhancement
Here are several features that I plan to add in the future. If you wish to contribute, please email me to discuss the design before submitting pull requests.

- A slideshow block for showing images or videos
- A footer at the bottom

# Policy for Open Source Contribution
This project was built on a lightweight, responsive (mobile/desktop) HTML/CSS template for creating academic research projects, developed by Yen-Chia Hsu (https://github.com/yenchiah) and Alexander Ariza (https:// github.com/Alexanderariza)

I welcome and appreciate contributions in fixing bugs and enhancing features. However, please avoid submitting pull requests (PRs) that modify the template's existing design without discussing them with me. Please also avoid submitting PRs that are not related to bug fixes or feature enhancements. Editing text in the README file is not encouraged (e.g., fixing grammar errors), and PRs with unnecessary editing (e.g., adding unrelated text, changing the design of the template, modifying the README text arbitrarily) will highly likely be marked as "spam" and "invalid."

If you are excited to contribute to the new features directly, please explain your design decisions and how your design matches this template's style in the PR. If you fix bugs, please explain which bug you fixed and how you fixed them. The explanations that you put in each PR can greatly help me determine if the changes can be merged into the master branch. PRs with no explanations will highly likely be rejected and marked as "wontfix."

