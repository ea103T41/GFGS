const new_todo = document.querySelector(".new-input");
const todo_list = document.querySelector(".todo-list");
const form = document.querySelector(".google-form");

form.addEventListener("click", function (e) {
    e.preventDefault();
    if (new_todo.value) {
        // 先存到Sheets
//        $.ajax({
//            // url為Google Form按下submit的aciotn
//            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwEOpaWusry_fcYlv3tRrJFcuRTpnIkfoDNLV9ZHxdLang-g/formResponse",
//            crossDomain: true,
//            data: {
//                "entry.177420638": new_todo.value
//            },
//            type: "POST",
//            dataType: "JSONP",
//            complete: function () {
//                //完成後把這些欄位清空
//                add_success();
//            }
//        });
        // 再新增到清單中
        const content = todo_list.innerHTML;
        console.log(content);
        const new_item = `<tr>
                            <td class="uk-table-shrink"><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                            <td class="uk-table-link uk-table-expand">
                                <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </td>
                            <td class="uk-table-shrink"><button class="uk-button uk-button-default" type="button">X</button></td>
                         </tr>`;
        console.log(new_item);
        todo_list.innerHTML = content + new_item;
        add_success();
    }
});

function add_success() {
    new_todo.value = '';
    console.log("送出成功");
}