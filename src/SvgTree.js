import React from 'react';
import './SvgTree.css';

function SvgTree(props) {
  return (
      <div>
        <div className="treeLabel">Root</div>
        <div className="tree">
          <div className="treeItem">
            <LineIntersection/>
            <div className="treeLabel">item 1</div>
            <LineDrop/>
            <div className="tree">
              <div className="treeItem">
                <LineIntersection/>
                <div className="treeLabel">item 1a</div>
                <LineDrop/>
                <div className="tree">
                  <div className="treeItem">
                    <LineIntersection/>
                    <div className="treeLabel">item 1aa</div>
                    <LineDrop/>
                  </div>
                  <div className="treeItem">
                    <LineIntersection/>
                    <div className="treeLabel">item 1ab</div>
                    <LineDrop/>
                  </div>
                </div>
              </div>
              <div className="treeItem">
                <LineIntersection/>
                <div className="treeLabel">item 1b</div>
                <LineDrop/>
              </div>
            </div>
          </div>
          <div className="treeItem">
            <LineIntersection/>
            <div className="treeLabel">item 2</div>
            <LineDrop/>
          </div>
        </div>
      </div>
  );
}

export default SvgTree;

function LineIntersection() {
  return (
      <svg width="40" height="40"  version="1.1" xmlns="http://www.w3.org/2000/svg" className="line-intersection">
        <line x1="16" y1="0" x2="16" y2="40" />
        <line x1="16" y1="32" x2="36" y2="32"  />
      </svg>
  );
}

function LineDrop() {
  return (
      <svg width="40" height="100%" viewBox="0 0 40 1" preserveAspectRatio="none" className="line-drop">
        <line x1="16" x2="16" y2="1"/>
      </svg>
  );
}
