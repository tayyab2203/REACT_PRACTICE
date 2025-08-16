
function LearnMap (){
const friendList = ["Fazal", "Irfan", "Kamil", "Shehryar"];
  return (
    <>
      <div>My Friends</div>
      <ul>
        {
            friendList.map((friendList, index) =>(
                <li key={index}>{friendList}</li>
             )) 
        }
      </ul>
    </>
  );
}
export default LearnMap
