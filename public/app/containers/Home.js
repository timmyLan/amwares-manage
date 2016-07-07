/**
 * Created by llan on 2016/6/8.
 */
const styles = {
  main_background: {
    padding: '72px 24px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundColor: 'rgb(232, 232, 232)',
    width: 'auto',
    textAlign: 'center'
  },
  main_text: {
    margin: '30px auto',
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: '300',
    fontSize: '56px'
  }
};
export default class Home extends React.Component {
  render() {
    return (
      <div style={styles.main_background}>
                <div>
                    <img src="./favicon.ico"/>
                    <h1 style={styles.main_text}>Amwares-Manage</h1>
                </div>
            </div>
    )
  }
}
