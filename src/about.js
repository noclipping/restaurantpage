let workerPic = document.createElement("img")
workerPic.src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
workerPic.classList.add("workerPic")
let title = document.createElement("p");
title.textContent="About Us";
title.classList.add("aboutTitle")
let paragraph = document.createElement("p");
paragraph.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ornare justo. Nulla facilisis risus a velit aliquet efficitur. Vestibulum dictum mauris augue, eget vehicula quam vulputate faucibus. In nec orci vestibulum, luctus diam eget, maximus lacus. Nulla eget felis nibh. Aliquam rhoncus eros a iaculis faucibus. Quisque id nisl a eros viverra mattis sed vehicula diam. Suspendisse et ultrices arcu.

Duis non est at justo laoreet gravida vel eu ligula. Sed id felis id lectus facilisis euismod. Sed consectetur erat ac metus fermentum iaculis a ac massa. Donec massa justo, rhoncus et augue sed, vehicula commodo urna. Ut commodo, turpis quis rutrum finibus, felis turpis porttitor nunc, in tempor mauris ex consectetur justo. Vivamus at lectus justo. Aliquam volutpat, nisl mattis sollicitudin molestie, augue velit convallis lacus, a vulputate ex erat sit amet ligula. In massa velit, ultricies bibendum aliquet sit amet, molestie vitae quam. Donec lobortis massa mollis rutrum fermentum. Proin dignissim massa ac pharetra ullamcorper. Mauris vestibulum enim tellus, in vehicula nunc dictum ac. Etiam varius suscipit ligula, nec ornare urna pellentesque a. Donec finibus eget purus eu mollis.

Sed quis tempor velit. Donec quis erat vitae justo posuere interdum quis non turpis. Curabitur non feugiat augue, eget porta ligula. Nunc ut diam tortor. Praesent ligula lorem, sodales eu sagittis at, elementum in ligula. Vivamus ut dui at ipsum cursus suscipit. Donec ut tempor lorem. Mauris rutrum mi nunc, nec semper neque porta id. Cras dapibus lacus nisl, in luctus lectus tristique sagittis. Donec fringilla sapien at neque iaculis maximus. Donec sed commodo eros. Vivamus sit amet velit metus. Nam vel ipsum ut enim sodales hendrerit vel vitae felis. Sed pellentesque auctor nisi. Nullam ornare egestas libero eget ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Morbi egestas sem et porta euismod. Pellentesque viverra iaculis auctor. Aliquam tincidunt velit quis porttitor accumsan. Suspendisse quis metus sit amet sem dignissim consequat non a ligula. Fusce semper sollicitudin purus non varius. Pellentesque lorem dolor, iaculis ullamcorper molestie ut, porttitor at purus. Vestibulum tempus lectus nunc, sed porta dui aliquam et. Quisque in tellus posuere, fringilla ante non, pretium felis. Pellentesque id pellentesque lectus. Phasellus venenatis erat tellus, cursus ullamcorper odio imperdiet vel. Donec egestas nisi non sem consectetur, eget luctus dolor semper. Nunc felis elit, cursus nec nunc ac, lacinia tincidunt augue.

Maecenas purus ante, commodo a auctor vel, vestibulum quis justo. Duis non nulla et nibh molestie scelerisque. Etiam sem lorem, malesuada et leo eu, rhoncus facilisis erat. Praesent gravida libero fringilla eros bibendum condimentum. Ut a est ac ante porttitor pellentesque sed vel nibh. Phasellus venenatis neque nisl, non lobortis quam lobortis et. Fusce faucibus, arcu eget vehicula pellentesque, ligula orci semper orci, vitae interdum dui eros sit amet ipsum. Aliquam nunc dolor, sagittis non mi vel, mattis pellentesque neque. Ut vel pharetra nisl, id imperdiet ipsum. Quisque justo massa, viverra sed aliquet in, consectetur quis leo. Mauris aliquet finibus nisi, quis bibendum erat. Ut condimentum feugiat lorem, vitae convallis enim egestas vitae. Aenean velit lacus, laoreet ut posuere id, vehicula nec est. Maecenas vulputate magna sed nisi sodales, pharetra rhoncus leo consectetur. Quisque et diam ut lacus viverra pellentesque ac sed nisl.

`;
paragraph.classList.add("aboutPara")

let aboutInit = () => {

    let content = document.createElement("div")
    content.classList.add("content")
    document.body.appendChild(content);
    console.log("aboutInit")
    content.appendChild(workerPic);
    content.appendChild(title);
    content.appendChild(paragraph);
}
export default aboutInit