import React from 'react';
import './SvgTree.css';

function SvgTree(props) {
  return (
      <div>
        <div className="treeLabel">Root</div>
        <Tree>
          <TreeItem name="item 1">
            <Tree>
              <TreeItem name="item 1a">
                <Tree>
                  <TreeItem name="item 1aa"/>
                  <TreeItem name="item 1ab"/>
                </Tree>
              </TreeItem>
              <TreeItem name="item 1b"/>
            </Tree>
          </TreeItem>
          <TreeItem name="item 2"/>
          <TreeItem name="item 3"/>
        </Tree>
      </div>
  );
}

export default SvgTree;

function TreeItem({name, children}) {
  return (
      <div className="treeItem">
        <LineIntersection/>
        <div className="treeLabel">{name}</div>
        <LineDrop/>
        {children}
      </div>
  );
}

function Tree({children}) {
  return (
    <div className="tree">
      {children}
    </div>
  );
}

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
