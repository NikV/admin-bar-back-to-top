<?php
/**
 * Plugin Name: Back to Top in the admin bar
 */

add_action( 'admin_bar_menu', 'admin_bar_back_to_top', 999 );

function admin_bar_back_to_top( $wp_admin_bar ) {
	if(is_admin()) {
		$args = array(
			'id'    => 'back-to-top',
			'title' => '&uarr;',
			'href'  => '#',
			'meta'  => array( 'class' => 'back-to-top-admin-bar' )
		);
		$wp_admin_bar->add_node( $args );
	}
}

function ab_back_to_top_scripts( $hook ) {

	wp_enqueue_script( 'ab_back_to_top_script', plugin_dir_url( __FILE__ ) . '/js/ab-back-to-top.js' );
}

add_action('admin_enqueue_scripts', 'ab_back_to_top_scripts');