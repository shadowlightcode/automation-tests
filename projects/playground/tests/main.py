import re
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context() # new session of browser
    page = context.new_page() # opens new page in browser
    page.goto("https://demo.playwright.dev/todomvc/#/")
    page.get_by_placeholder("What needs to be done?").click()
    page.get_by_placeholder("What needs to be done?").click()
    page.get_by_placeholder("What needs to be done?").fill("hello happy!")
    page.get_by_placeholder("What needs to be done?").press("Enter")

    # ---------------------
    context.close()
    browser.close()