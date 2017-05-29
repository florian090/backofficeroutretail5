import React from 'react';

class BreadCrumbs extends React.Component {

    pathname() {
        var path = location.pathname.substring(1).split("/");
        var arr = []
        for (var i = 0; i < path.length; i++) {
            if (i + 1 !== path.length) {
                arr.push(<span key={i}>{path[i].replace(/-/g, " ")}</span>)
                arr.push(<span className="triangle"></span>)
            } else {
                arr.push(<span key={i}>{path[i].replace(/-/g, " ")}</span>)
            }
        }
        return arr
    }

    render() {
        // console.log(location.pathname);
        return (
            <div className="breadcrumbs">
                {/* {this.pathname()} */}
            </div>
        )
    }
}
export default BreadCrumbs;