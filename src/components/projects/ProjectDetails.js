import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  }
}

const ProjectDetails = ({project}) => {
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{project && project.title}</span>
                <p>{project && project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {project && project.authorFirstName} {project && project.authorLastName}</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default connect(mapStateToProps)(firestoreConnect([{collection: 'projects'}])(ProjectDetails));
