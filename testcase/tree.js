function M() {
	document.getElementById("demo").innerHTML = "dj";
}

var json = [  
  {  
  "name": "张三",  
  "parent": "null",  
  "children": [  
    {  
      "name": "李四",  
      "parent": "张三",  
      "children": [  
        {  
          "name": "王五",  
          "parent": "李四",
          "children": [
          {"name": "程六","parent": "王五" },
          {"name": "王八","parent": "王五" },
          {"name": "王七","parent": "王五" },
          {
          	"name": "王九",
          	"parent": "王五",
          	"children":[
          	{"name": "王十","parent": "王五" },
          	{"name": "王十一","parent": "王五" },
          	{"name": "王十二","parent": "王五" },
          	{"name": "王十三","parent": "王五" },
          	{"name": "王十四","parent": "王五" },
          	{
          		"name": "程五",
          		"parent": "王五",
          		"children":[
		          	{"name": "程六","parent": "程五" },
		          	{"name": "程七","parent": "程五" },
		          	{"name": "程八","parent": "程五" },
		          	{"name": "小张","parent": "小红" },
			      	{"name": "小王","parent": "小红" },
			      	{"name": "小程","parent": "小红" },
			      	{"name": "小陈","parent": "小红" },
			      	{"name": "小明","parent": "小红" },
			      	{"name": "小张","parent": "小红" },
			      	{"name": "小王","parent": "小红" },
			      	{"name": "小程","parent": "小红" },
			      	{"name": "小陈","parent": "小红" },
			      	{"name": "小明","parent": "小红" },
			      	{"name": "小张","parent": "小红" },
			      	{"name": "小王","parent": "小红" },
			      	{"name": "小程","parent": "小红" },
			      	{"name": "小陈","parent": "小红" },
			      	{"name": "小明","parent": "小红" },
			      	{"name": "小张","parent": "小红" },
			      	{"name": "小王","parent": "小红" },
			      	{"name": "小程","parent": "小红" },
			      	{"name": "小陈","parent": "小红" },
		          	{"name": "程九","parent": "程五" },
		          	{
		          		"name": "程十",
		          		"parent": "程五",
		          		"children":[
		          			{"name": "程十一","parent": "程十" },
					        {"name": "程十二","parent": "程十" },
					        {"name": "程十三","parent": "程十" },
					        {"name": "小张","parent": "小红" },
					      	{"name": "小王","parent": "小红" },
					      	{"name": "小程","parent": "小红" },
					      	{"name": "小陈","parent": "小红" },
					      	{"name": "小明","parent": "小红" },
					      	{"name": "小张","parent": "小红" },
					      	{"name": "小王","parent": "小红" },
					      	{"name": "小程","parent": "小红" },
					      	{"name": "小陈","parent": "小红" },
					      	{"name": "小明","parent": "小红" },
					      	{"name": "小张","parent": "小红" },
					      	{"name": "小王","parent": "小红" },
					      	{"name": "小程","parent": "小红" },
					      	{"name": "小陈","parent": "小红" },
					      	{"name": "小明","parent": "小红" },
					      	{"name": "小张","parent": "小红" },
					      	{"name": "小王","parent": "小红" },
					      	{"name": "小程","parent": "小红" },
					      	{"name": "小陈","parent": "小红" },
		          		]
		          	},
          		]
          	}
          	]
          }
          ]
        },  
        {  
          "name": "马一",  
          "parent": "李四",
          "children":[
          	{"name": "马二","parent": "马一" },
          	{"name": "马三","parent": "马一" },
          	{"name": "马四","parent": "马一" },
          	{"name": "马五","parent": "马一" },
          	{"name": "马六","parent": "马一" },
          	{"name": "马七","parent": "马一" },
          	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
	      	{"name": "小明","parent": "小红" },
	      	{"name": "小张","parent": "小红" },
	      	{"name": "小王","parent": "小红" },
	      	{"name": "小程","parent": "小红" },
	      	{"name": "小陈","parent": "小红" },
          	]
        }  
      ]  
    },  
    {  
      "name": "小红",  
      "parent": "张三",
      "children":[
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	{"name": "小明","parent": "小红" },
      	{"name": "小张","parent": "小红" },
      	{"name": "小王","parent": "小红" },
      	{"name": "小程","parent": "小红" },
      	{"name": "小陈","parent": "小红" },
      	
      ]
    }  
  ]  
}  
];  
  
  
	var margin = [20, 120, 20, 120],
	    width = document.getElementById("tree").offsetWidth,
	    height = document.getElementById("tree").offsetHeight; 
	      
	var i = 0,  
	    duration = 750,  
	    root;  
	  
	var tree = d3.layout.tree()  
	    .size([height, width]);  
	  
	var diagonal = d3.svg.diagonal()  
	    .projection(function(d) { return [d.y, d.x]; });  
	  
	var zoom = d3.behavior.zoom().scaleExtent([0.1, 100]).on("zoom", zoomed);//添加放大缩小事件
	  
	var svg = d3.select("body").select("#tree").append("svg")
	.call(zoom)//给svg绑定zoom事件
	  .append("g")  
	  .call(zoom)//给g绑定zoom事件
	  .append("g")
	    .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");  

      
	  root = json[0];  
	  root.x0 = height / 2;  
	  root.y0 = 0;  
	  
	  function collapse(d) {  
	    if (d.children) {  
	      d._children = d.children;  
	      d._children.forEach(collapse);  
	      d.children = null;  
	    }  
	  }  
	  
	  root.children.forEach(collapse);  
	  update(root);  
	  
	function zoomed() {
	    svg.attr("transform",
	        "translate(" + zoom.translate() + ")" +
	        "scale(" + zoom.scale() + ")"
	    );
	}
	  
	function update(source) {  
	  
	  // Compute the new tree layout.  
	  var nodes = tree.nodes(root).reverse(),  
	      links = tree.links(nodes);  
	  
	  // Normalize for fixed-depth.  
	  nodes.forEach(function(d) { d.y = d.depth * 180; });  
	  
	  // Update the nodes…  
	  var node = svg.selectAll("g.node")  
	      .data(nodes, function(d) { return d.id || (d.id = ++i); });  
	  
	  // Enter any new nodes at the parent's previous position.  
	  var nodeEnter = node.enter().append("g")  
	      .attr("class", "node")  
	      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })  
	      .on("click", click);  
	  
	  nodeEnter.append("circle")  
	      .attr("r", 1e-6)  
	      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });  
	  
	  nodeEnter.append("text")  
	      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })  
	      .attr("dy", ".35em")  
	      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })  
	      .text(function(d) { return d.name; })  
	      .style("fill-opacity", 1e-6);  
	  
	  var nodeUpdate = node.transition()  
	      .duration(duration)  
	      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });  
	  
	  nodeUpdate.select("circle")  
	      .attr("r", 4.5)  
	      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });  
	  
	  nodeUpdate.select("text")  
	      .style("fill-opacity", 1);  
	  
	  var nodeExit = node.exit().transition()  
	      .duration(duration)  
	      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })  
	      .remove();  
	  
	  nodeExit.select("circle")  
	      .attr("r", 1e-6);  
	  
	  nodeExit.select("text")  
	      .style("fill-opacity", 1e-6);  
	  
	  var link = svg.selectAll("path.link")  
	      .data(links, function(d) { return d.target.id; });  
	  
	  link.enter().insert("path", "g")  
	      .attr("class", "link")  
	      .attr("d", function(d) {  
	        var o = {x: source.x0, y: source.y0};  
	        return diagonal({source: o, target: o});  
	      });  
	    
	  link.transition()  
	      .duration(duration)  
	      .attr("d", diagonal);  
	    
	  link.exit().transition()  
	      .duration(duration)  
	      .attr("d", function(d) {  
	        var o = {x: source.x, y: source.y};  
	        return diagonal({source: o, target: o});  
	      })  
	      .remove();  
	   
	  nodes.forEach(function(d) {  
	    d.x0 = d.x;  
	    d.y0 = d.y;  
	  });  
	}  
	  
	function click(d) {  
	  if (d.children) {  
	    d._children = d.children;  
	    d.children = null;  
	  } else {  
	    d.children = d._children;  
	    d._children = null;  
	  }  
	  update(d);  
	}  