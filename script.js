const charts = [
  ["#vis-f1", "charts/f1_coffee_price.json"],
  ["#vis-f2", "charts/f2_population.json"],
  ["#vis-f3", "charts/f3_population_growth.json"],
  ["#vis-f4", "charts/f4_cafe_distribution.json"],
  ["#vis-f5", "charts/f5_cafe_share.json"],
  ["#vis-f6", "charts/f6_business_categories.json"],
  ["#vis-f7", "charts/f7_population_vs_price.json"],
  ["#vis-f8", "charts/f8_interactive_growth.json"],
  ["#vis-f9", "charts/f9_ecosystem.json"],
  ["#vis-f10", "charts/f10_choropleth_map.json"]
];

charts.forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, { actions: false }).catch(error => {
    document.querySelector(selector).innerHTML =
      `<p style="color:#9b2c2c;">Chart failed to load: ${spec}</p>`;
    console.error(error);
  });
});
