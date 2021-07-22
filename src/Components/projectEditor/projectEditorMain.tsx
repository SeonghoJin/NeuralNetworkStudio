import { Container, makeStyles } from '@material-ui/core';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import ProjectEditorGraphContainer from './ProjectEditorGraphContainer';
import { ReactFlowProvider } from 'react-flow-renderer';
import useProjectController from './projectController';
import useGetPythonCodeResult from './hooks/useGetPythonCodeResult';
import usePutProjectContentResult from './hooks/usePutProjectContentResult';
import useGetProjectResult from './hooks/useGetProjectResult';
import StandardModal from '../modal/StandardModal';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
    display: 'flex',
  },
  contentWrapper: {
    flexGrow: 1,
  }
})

const ProjectEditorMain = () => {
  const classes = useStyle();
  useProjectController();
  const getPythonCodeResult = useGetPythonCodeResult();
  const putProjectContentResult = usePutProjectContentResult();
  return (
    <>
      {getPythonCodeResult.error && (getPythonCodeResult.errorModal)}
      {putProjectContentResult.error && (putProjectContentResult.errorModal)}
      <div className={classes.wrapper}>
        <ReactFlowProvider>
          <Container className={classes.container}>
            <ProjectEditorLeftSideBar/>
            <div className={classes.contentWrapper}>
              <ProjectEditorGraphContainer/>
            </div>
          </Container>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default ProjectEditorMain;
