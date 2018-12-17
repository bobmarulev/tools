/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-menu-button.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

declare module 'goog:polymer.paperMenuButton.paperMenuButton' {

  import {IronA11yKeysBehavior} from 'goog:polymer.ironA11yKeysBehavior.ironA11yKeysBehavior'; // from //third_party/javascript/polymer/v2/iron-a11y-keys-behavior

  import {IronControlState} from 'goog:polymer.ironBehaviors.ironControlState'; // from //third_party/javascript/polymer/v2/iron-behaviors

  import {Polymer} from 'goog:polymer.polymer.lib.legacy.polymerFn'; // from //third_party/javascript/polymer/v2/polymer

  import {dom} from 'goog:polymer.polymer.lib.legacy.polymerDom'; // from //third_party/javascript/polymer/v2/polymer

  import {html} from 'goog:polymer.polymer.lib.utils.htmlTag'; // from //third_party/javascript/polymer/v2/polymer

  export {PaperMenuButton};

  import {LegacyElementMixin} from 'goog:polymer.polymer.lib.legacy.legacyElementMixin'; // from //third_party/javascript/polymer/v2/polymer

  class PaperMenuButton {

    /**
     * True if the content is currently displayed.
     */
    opened: boolean|null|undefined;

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: string|null|undefined;

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: string|null|undefined;

    /**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */
    dynamicAlign: boolean|null|undefined;

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`. Use a negative value to offset to the
     * left, or a positive value to offset to the right.
     */
    horizontalOffset: number|null|undefined;

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`. Use a negative value to offset towards the
     * top, or a positive value to offset towards the bottom.
     */
    verticalOffset: number|null|undefined;

    /**
     * If true, the dropdown will be positioned so that it doesn't overlap
     * the button.
     */
    noOverlap: boolean|null|undefined;

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: boolean|null|undefined;

    /**
     * Set to true to disable automatically closing the dropdown after
     * a selection has been made.
     */
    ignoreSelect: boolean|null|undefined;

    /**
     * Set to true to enable automatically closing the dropdown after an
     * item has been activated, even if the selection did not change.
     */
    closeOnActivate: boolean|null|undefined;

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown.
     */
    openAnimationConfig: object|null|undefined;

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown.
     */
    closeAnimationConfig: object|null|undefined;

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */
    allowOutsideScroll: boolean|null|undefined;

    /**
     * Whether focus should be restored to the button when the menu closes.
     */
    restoreFocusOnClose: boolean|null|undefined;

    /**
     * This is the element intended to be bound as the focus target
     * for the `iron-dropdown` contained by `paper-menu-button`.
     */
    _dropdownContent: object|null|undefined;
    hostAttributes: object|null;

    /**
     * The content element that is contained by the menu button, if any.
     *    
     */
    readonly contentElement: any;

    /**
     * If the dropdown is open when disabled becomes true, close the
     * dropdown.
     *
     * @param disabled True if disabled, otherwise false.
     */
    _disabledChanged(disabled: boolean): void;

    /**
     * Toggles the dropdown content between opened and closed.
     */
    toggle(): void;

    /**
     * Make the dropdown content appear as an overlay positioned relative
     * to the dropdown trigger.
     */
    open(): void;

    /**
     * Hide the dropdown content.
     */
    close(): void;

    /**
     * When an `iron-select` event is received, the dropdown should
     * automatically close on the assumption that a value has been chosen.
     *
     * @param event A CustomEvent instance with type
     * set to `"iron-select"`.
     */
    _onIronSelect(event: CustomEvent|null): void;

    /**
     * Closes the dropdown when an `iron-activate` event is received if
     * `closeOnActivate` is true.
     *
     * @param event A CustomEvent of type 'iron-activate'.
     */
    _onIronActivate(event: CustomEvent|null): void;

    /**
     * When the dropdown opens, the `paper-menu-button` fires `paper-open`.
     * When the dropdown closes, the `paper-menu-button` fires `paper-close`.
     *
     * @param opened True if the dropdown is opened, otherwise false.
     * @param oldOpened The previous value of `opened`.
     */
    _openedChanged(opened: boolean, oldOpened: boolean): void;
  }

  interface PaperMenuButton extends IronA11yKeysBehavior, IronControlState, LegacyElementMixin, HTMLElement {
  }

  global {

    interface HTMLElementTagNameMap {
      "paper-menu-button": PaperMenuButton;
    }
  }
}