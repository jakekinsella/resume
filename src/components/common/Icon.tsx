import styled from '@emotion/styled';

interface Props {
  icon: string
}
function Icon({ icon } : Props) {
  return <div className="material-symbols-outlined" style={{ fontSize: "30px" }}>{icon}</div>
}

export default Icon;