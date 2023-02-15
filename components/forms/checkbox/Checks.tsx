
const initialState: UserData = {
  name: "",
  tel: "",
  member: 0,
  child: {checked: false},
  pet: {checked: false}
}

const inputUserText = (e: React.ChangeEvent) => {
  e.preventDefault();
  const { id, value }: EventObject = e.target;
  setUserData({...userData, [id]:value});

}

const Page = () => {

  return (
    <form>
      <input type="checkbox" id="child" onChange={changeCheckState}
    </form>
  )
}

export default Page;