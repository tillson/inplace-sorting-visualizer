import ReactDOM from 'react-dom'
import React from 'react';
import * as d3 from "d3";

class SortVisualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            d3Data: [],
            compares: 0,
            svg: undefined
        };
    }

    render() {
        return (
            <div className='svg-container'>
                <p><b>Comparisons: { this.state.compares } </b></p>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.fitParentContainer)
        this.setupD3Obj();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.fitParentContainer)
    }

    setupD3Obj() {
        var initialArray = this.props.initial;
        var dx = this.props.width / initialArray.length;
        var x = 0;
        for (var i = 0; i < initialArray.length; i++) {
            this.state.d3Data.push({
                x: x,
                y: 50,
                width: dx / 1.5,
                height: dx / 1.5,
                name: initialArray[i],
                index: i
            })
            x += dx;
        }
        this.draw();
    }

    draw() {
        if (this.state.drawn) {
            return;
        }
        var svg = d3.select(ReactDOM.findDOMNode(this))
            .append('svg')
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 " + this.props.width + "," + this.props.height);
        this.setState({ drawn: true, svg: svg });
        var g = svg.selectAll('square')
            .data(this.state.d3Data)
            .enter()
            .append('g')
            .attr('id', (d) => { return this.state.name + '-' + d.name })
            // .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
        g.append('rect')
            .attr('class', 'square')
            .attr('x', function(d) { return d.x })
            .attr('y', function(d) { return d.y})
            .attr('width', function(d) { return d.width })
            .attr('height', function(d) { return d.height })
            .attr('fill', '#fff')

        g.append("text")
            .attr('y', function (d) { return d.y })
            .attr('x', function (d) { return d.x })
            .attr('dy', function(d) { return (8 + d.height / 2) + 'px' })
            .attr('dx', function(d) { return (d.width / 2) + 'px' })
            .style('fill', 'black')
            .attr("text-anchor", "middle")
            .text(function (d) { return d.name; })
            .style("fill-opacity", 1)
            .style('font-size', 25 + 'px')

            .enter();

        this.doSwap(0);
    }

    doSwap(iteration) {

        if (iteration >= this.props.operations.length) {
            console.log('done');
            return;
        }
        var operation = this.props.operations[iteration].split(':');
        this.setState({ compares: iteration + 1 });
        if (operation.length === 1) {
            this.doSwap(iteration + 1);
            return;
        }
        var swap1 = operation[0]
        var swap2 = operation[1];
        console.log(operation);

        var swap1Obj = d3.select('#' + this.state.name + '-' + swap1)
        var swap2Obj = d3.select('#' + this.state.name + '-' + swap2)
        var swap1x = swap1Obj.datum().x;
        var swap2x = swap2Obj.datum().x;

        swap1Obj.selectAll('*')
            .transition()
            .delay(1000)
            .attr('y', function(d) { return d.y + 50 })
            .duration(750)
            .transition()
            .attr('x', function(d) { return swap2x })
            .duration(750)
            .transition()
            .attr('y', function(d) { return d.y })
            .duration(750)

        swap2Obj.selectAll('*')
            .transition()
            .delay(1000)
            .attr('y', function(d) { return d.y + 50 })
            .duration(750)
            .transition()
            .attr('x', function(d) { return swap1x })
            .duration(750)
            .transition()
            .attr('y', function(d) { return d.y })
            .duration(750)
            .on('end', () => {
                this.x = swap1x;
                var newswap1data = swap1Obj.datum();
                var newswap2data = swap2Obj.datum();
                newswap1data.x = swap2x;
                newswap2data.x = swap1x;
                swap1Obj.data(newswap1data);
                swap2Obj.data(newswap2data);
                this.doSwap(iteration + 1);
            })

       }

}


export default SortVisualization;