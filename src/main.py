from reactpy import html, component, run
from css import BACKGROUND

@component
def section():
    return html.section(
        {'style': BACKGROUND},
        html.link({"rel": "stylesheet", "href": "style.css"}),
        html.h1("Hello World"),
        html.ul(
            html.li("This is the first"),
            html.li("This is the second"),
        )
    )

run(section)