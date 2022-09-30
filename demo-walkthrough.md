<style>
  h1, h2, h3, strong {
    color: white;
  }
  em {
    color: #697183;
  }
  * {
    line-height: 2em
  }
</style>

<img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" />

# Speed-run the Highcharts library

#### aka key takeouts from a brief acquaintance with the highcharts library

---

## Credits

- To the People Operations Team, and especially [@eleftheria](mailto:eleftheria@hackthebox.eu), for providing the aggregated HTB data displayed in the demo charts.
- To [@silo](mailto:silo@hackthebox.eu) for his beautiful HTB
  theme, which I copied for this demo.
- To [@lastM4n](mailto:lastm4n@hackthebox.com) for his recent
  CTF analytics work, which provided both inspiration and
  several code snippets for this demo.

---

## Table of contents

1. <a href="#intro">Introduction</a>
2. <a href="#docs-walkthrough">Documentation walkthrough</a>
3. <a href="#simple-setup">Basic Setup</a>
4. <a href="#modules-setup">Setup specific chart functionalities</a>
5. <a href="#customise-chart">Customising a chart</a>
6. <a href="#responsiveness">Responsiveness</a>
7. <a href="#multiple-charts">Using multiple charts</a>
8. <a href="#pitfalls">Pitfalls</a>
9. <a href="#conclusion">Key takeouts</a>

---

## <h2 id="intro">Introduction</h2>

The Highcharts library is a robust tool for data visualisation. It offers a huge variety of charts and maps, it is highly customisable and it can easily handle large datasets.

In this session we will go through the basics of the Highchart library in an attempt to get to know the library and its quirks and prepare ourselves for the first time we will need use it.

---

## <h2 id="docs-walkthrough">Highcharts Documentation walkthrough</h2>

Most of the useful documentation can be found in the official Highcharts docs website. In the official docs we can browse through the available chart types and pick our favourite - or the one that is closest to our needs, learn about the expected input for each chart type and other useful stuff.

References:

- [Available charts](https://www.highcharts.com/demo)
- [Highcharts official documentation](https://www.highcharts.com/docs/index)
- [Highcharts-vue library](https://github.com/highcharts/highcharts-vue)

---

## <h2 id="simple-setup">Setup</h2>

Setting up the library is straight forward when it comes to simple charts.

To start using Highcharts in a VueJS project we need to:

1. Install the library `npm install vue-highcharts`
2. Import vue-highcharts in our vue component.
3. Customise our chart via the chart `options` property.

_(demo: Display a simple line chart - Demo1.vue)_

---

## <h2 id="modules-setup">Setup chart modules</h2>

Highcharts offer a lot of add-on functionalities that need to be implicitly imported.

Displaying more complex chart functionalities is very easy, once we understand the relationship between the Highcharts **modules** described in the docs and their `vue-highcharts` equivalents.

_(demo: Import debugger and accessibility modules - Demo2.vue)_

---

## <h2 id="customise-chart">Customising my chart</h2>

**What do I need?**

- Type / Choose one from the available chart types
- Data / Figure out what data my chart type needs
- Styling / Figure out the available styling options for this chart, apply 'em

_(demo: Apply styling to a simple line chart - Demo3.vue)_

---

## <h2 id="responsiveness">Responsiveness</h2>

Playing with the window size we can see that the chart is already highly responsive. This is a goody that comes out of the box with the library. Our task will be much easier if avoid breaking this native responsiveness of the library (by not hardcoding widths and heights).

Having said that, the library gives us even more tools to customise the looks of the chart in small screens. Similarly to the previous customisations, we can find instructions on how write rules for responsiveness in the docs.

_(demo: Apply responsive options to a simple line chart - Demo4.vue)_

---

## <h2 id="multiple-charts">What about a collection of charts?</h2>

Key **differences** with the previous case:

- Many charts should be created - many chart options should be manipulated
- The charts will (probably) need to have a unified look and feel
- We need to arrange the charts in the page in a sustainable and maintainable way.

**Let's talk architecture**

Requirements:

1. We would like to have the **theming** defined once and for all.

2. We need to define our **componentization** strategy. How are we going to break up the responsibilities of displaying the different charts? Where are we going to store the chart options? Which component is responsible for the state of the chart data (get from Vuex store/api) ?

3. Finally, we would like the charts to be **responsive**, so we can have an overall responsive page and be able to rearrange the individual charts' positions in the page as we please.

Approach:

1. Use an external theming file for charts that are logically connected.  
   _(demo: Import styling-related options from an external file - Demo5.vue)_

2. Try to import the theme and other reusable modules in one place, to end up with cleaner components overall. Moreover, fewer imports achieve a slightly better build time performance ;) .  
   _(demo: Multiple charts in a page - Demo6.vue)_
   <!-- For the sake of this demo, we will follow the approach of having a base component responsible for the overall grid structure and other child components responsible for the individual charts. Unlike the universal theming approach, this one is not "recommended" per se. It is just an architectural decision I made for the sake of this demo. -->

References:

- [Theming chart options](https://www.highcharts.com/docs/chart-design-and-style/themes)

---

## <h2 id="pitfalls">Pitfalls</h2>

1. Remember to impicitly import ALL the desired modules.
2. Avoid hardcoding the width and height in the charts options, to take advantage of the library's responsiveness.
3. Separate the styling from the data related chart options, to eliminate duplication and achieve an overall more maintainable outcome.

<!--
1. treemap heatmap example https://www.highcharts.com/demo/treemap-coloraxis
-->

---

## <h2 id="conclusion">Key takeouts</h2>

1.  Plan ahead your approach according to the rough requirements.
2.  If possible, consider facilitating future needs/unknowns in your initial approach.
3.  Read the docs ;)
4.  Work with the library - not against it!

---

## The greater picture

The above principles are in fact versatile and can be applied each time we work with a library/framework/tool. Given the fact that our tool of choice is nicely built and fits our needs in the first place, chances are that the tool's developers have already accommodated for most of our micro-requirements.

Thankfully, our tech stack in HTB is very popular, well documented and mostly new. Now, the "difficult" part of our job is to trust our choices and understand our tools' ways in depth.

_"Bob would never bother picking the lock, had Alice left the keys on the table..."_

---

## Questions?

.

.

.

.

---

## Thank you!

.

.

.

.

<img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" /> <img src="./public/logo_highcharts.svg" height="20" width="20" /> <img src="./public/logo_htb.svg" height="20" width="20" />
