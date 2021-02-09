DEFAULT_THEME_PATH = "./data/themes/bootstrap/install.json"
DEFAULT_THEME_PATH = "./data/themes/default/install.json"

DEFAULT_CSS_PROPERTIES = "./data/css.json"
sidebaropened = true;
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
function loadtheme(theme) {
    let categories = theme.categories;
    categories.forEach(category => {
        console.log(category.components)
        var elm_category = $('<div class="components-category treeview-item "></div>');
        $('#components-toggle').append(elm_category)
        var elm_category_header = $('<div class="components-category-header treeview-item-header"></div>').append('<p>' + category.name + '</p>');
        elm_category.append(elm_category_header)
        var elm_category_components_root = $(' <div class="components-category-items treeview-item-content"></div>');
        elm_category.append(elm_category_components_root)
        category.components.forEach(component => {
            var elm_component_item = $('<div class="component-item" draggable="true" ></div>').append(
                $('<div class="component-item-thumb"><span class="fa fa-plug">' + "" + '</span></div>'),//component.thumb
                $('<a class="component-item-name">' + component.name + '</a>')
            )
            elm_category_components_root.append(elm_component_item)
            //elm_component_item.setData(component)
            elm_component_item.on('dragstart', ($event) => {
                if ($event.dataTransfer)
                    $event.dataTransfer.setData("text", $event.target.id);
            })
        })

    });
}
function loadCssInterceptors(cssInterceptors) {
    console.log(cssInterceptors.interceptors)
    var inerceptors_root = $('.props-category-items');
    cssInterceptors.interceptors.forEach((interception) => {
        var interception_elm = $('<div class="prop-category treeview-item"></div>');
        interception_elm.append($('<div class="prop-category-header treeview-item-header"><p>' + interception.name + '</p></div>'))
        var properties_root = $('<div class="prop-category-content treeview-item-content"></div>');
        interception_elm.append(properties_root)
        interception.properties.forEach(property => {
            var property_elm = $('<div class="prop-item"></div>').append($('<label>' + property.name + '</label>'))

            if (property.input.type === "dropdown") {
                var property_input_elm = $('<select></select>');
                property.input.items.forEach(item => {
                    property_input_elm.append('<option value="' + item.key + '">' + item.name + '</option>')
                })
                property_elm.append(property_input_elm)
            } else
                if (property.input.type === "decimal") {
                    var property_input_elm = $('<div class="selectunit"><input type="number" value="' + property.default + '"><select><option value="px">px</option><option value="pm">em</option></select></div>');
                    property_elm.append(property_input_elm)
                    //property_elm.append($('<select class="input-unit"><option value="px">px</option><option value="pm">em</option></select>'))
                }
            properties_root.append(property_elm)
        })
        inerceptors_root.append(interception_elm)

    })
}
function toggleSidebar() {

    var sidebarToggle = $('.components-toggle');
    if (sidebaropened) {
        sidebarToggle.css("width", "0%")
    } else {

    }
}

$('body').ready(() => {

    $.ajax({
        type: 'GET',
        url: DEFAULT_THEME_PATH,
    }).done(function (theme) {
        loadtheme(theme);
        $.ajax({
            type: 'GET',
            url: DEFAULT_CSS_PROPERTIES
        }).done(function (cssInterceptors) {
            loadCssInterceptors(cssInterceptors);
            $('.treeview-item-header').click((e) => {
                var elm = e.currentTarget;

                if ($(elm).parent().hasClass('collapsed')) {
                    $(elm).parent().parent().children('.treeview-item').addClass('collapsed')
                    $(elm).parent().removeClass('collapsed');
                } else {
                    $(elm).parent().addClass('collapsed');
                }
            })
        }).fail(function (jqXHR, textStatus) {
            alert('Something went wrong: ' + textStatus);
        })

    }).fail(function (jqXHR, textStatus) {
        alert('Something went wrong: ' + textStatus);
    })


})


