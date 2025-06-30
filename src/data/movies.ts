import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';
import heroImg1 from '../assets/ChatGPT Image 17 giu 2025, 12_26_12.png';
import heroImg2 from '../assets/ChatGPT Image 17 giu 2025, 13_38_06.png';
import heroImg3 from '../assets/ChatGPT Image 17 giu 2025, 13_43_45.png';
import dashboardImg from '../assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png';
import mobileImg from '../assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png';
import emailImg from '../assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png';
import hackImg from '../assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png';
import revenueImg from '../assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png';
import avatarImg from '../assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png';
import funnelImg from '../assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png';
import workspaceImg from '../assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png';
import canvasImg1 from '../assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png';
import panelImg from '../assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png';
import modalImg from '../assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png';
import flowImg1 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png';
import flowImg2 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png';
import blockImg1 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png';
import blockImg2 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png';
import splitImg from '../assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png';
import automationImg from '../assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png';

import { Movie, ContentRow } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Revolution',
    description: 'Explore the cutting-edge world of artificial intelligence and its impact on modern society.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 15m',
    thumbnail: img1,
    backdrop: heroImg1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Digital Transformation',
    description: 'A comprehensive look at how businesses are adapting to the digital age.',
    genre: ['Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: img2,
    backdrop: heroImg2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 890
  },
  {
    id: '3',
    title: 'Future of Work',
    description: 'Discover how remote work and AI are reshaping the modern workplace.',
    genre: ['Documentary', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: img3,
    backdrop: heroImg3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 2100
  },
  {
    id: '4',
    title: 'Innovation Hub',
    description: 'Inside the world\'s most innovative tech companies and their groundbreaking projects.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: img4,
    backdrop: dashboardImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 1680
  },
  {
    id: '5',
    title: 'Startup Stories',
    description: 'Real stories from entrepreneurs who changed the world with their innovative ideas.',
    genre: ['Business', 'Biography'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: img5,
    backdrop: mobileImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 3200
  }
];

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Digital Renaissance',
  description: 'A groundbreaking exploration of how technology is reshaping human creativity and innovation in the 21st century.',
  genre: ['Technology', 'Documentary', 'Innovation'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 30m',
  thumbnail: heroImg1,
  backdrop: heroImg1,
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  isFeatured: true,
  likes: 4500
};

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trend-1',
        title: 'AI Dashboard Revolution',
        description: 'Discover the latest trends in AI-powered dashboard design and user experience.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: dashboardImg,
        backdrop: dashboardImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 2800
      },
      {
        id: 'trend-2',
        title: 'Mobile Innovation',
        description: 'The future of mobile technology and its impact on daily life.',
        genre: ['Technology', 'Mobile'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: mobileImg,
        backdrop: mobileImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 1950
      },
      {
        id: 'trend-3',
        title: 'Email Automation',
        description: 'How AI is transforming email marketing and customer communication.',
        genre: ['Technology', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '1h 15m',
        thumbnail: emailImg,
        backdrop: emailImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 1420
      },
      {
        id: 'trend-4',
        title: 'Hack It',
        description: 'Ethical hacking and cybersecurity in the modern digital landscape.',
        genre: ['Technology', 'Security'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 10m',
        thumbnail: hackImg,
        backdrop: hackImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 3100
      },
      {
        id: 'trend-5',
        title: 'Revenue Analytics',
        description: 'Advanced analytics and revenue optimization strategies for modern businesses.',
        genre: ['Business', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: revenueImg,
        backdrop: revenueImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 2650
      },
      {
        id: 'trend-6',
        title: 'AI Avatar Training',
        description: 'The future of AI-generated avatars in corporate training and education.',
        genre: ['Technology', 'Education'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: avatarImg,
        backdrop: avatarImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1780
      }
    ]
  },
  {
    id: 'tech-docs',
    title: 'Tech Documentaries',
    movies: [
      {
        id: 'tech-1',
        title: 'Funnel Builder Pro',
        description: 'Building high-converting sales funnels with drag-and-drop technology.',
        genre: ['Technology', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: funnelImg,
        backdrop: funnelImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 2200
      },
      {
        id: 'tech-2',
        title: 'Future Workspace',
        description: 'How digital whiteboards and collaboration tools are changing teamwork.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: workspaceImg,
        backdrop: workspaceImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 1890
      },
      {
        id: 'tech-3',
        title: 'UI Canvas Design',
        description: 'Modern approaches to user interface design and user experience.',
        genre: ['Design', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: canvasImg1,
        backdrop: canvasImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 1560
      },
      {
        id: 'tech-4',
        title: 'Dynamic UI Panels',
        description: 'Creating engaging and interactive user interface components.',
        genre: ['Design', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: panelImg,
        backdrop: panelImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 1340
      },
      {
        id: 'tech-5',
        title: 'Visual Builder',
        description: 'No-code solutions for building complex applications visually.',
        genre: ['Technology', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: modalImg,
        backdrop: modalImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 2750
      },
      {
        id: 'tech-6',
        title: 'Flow Architecture',
        description: 'Designing efficient workflows and process automation systems.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: flowImg1,
        backdrop: flowImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 1920
      }
    ]
  },
  {
    id: 'business',
    title: 'Business Innovation',
    movies: [
      {
        id: 'biz-1',
        title: 'Block Components',
        description: 'Modular design systems and component-based development approaches.',
        genre: ['Design', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: blockImg1,
        backdrop: blockImg1,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 1680
      },
      {
        id: 'biz-2',
        title: 'Interface Evolution',
        description: 'The evolution of user interfaces from desktop to mobile to AR/VR.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: blockImg2,
        backdrop: blockImg2,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 2100
      },
      {
        id: 'biz-3',
        title: 'Video Sales Revolution',
        description: 'How personalized video content is transforming sales and marketing.',
        genre: ['Marketing', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: splitImg,
        backdrop: splitImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 2850
      },
      {
        id: 'biz-4',
        title: 'Automation Dashboard',
        description: 'Advanced automation systems and their impact on business efficiency.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: automationImg,
        backdrop: automationImg,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 3400
      },
      ...movies.slice(0, 3)
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: []
  }
];

export const getMostLikedMovies = (): Movie[] => {
  const allMovies: Movie[] = [];
  
  contentRows.forEach(row => {
    if (row.id !== 'most-liked' && Array.isArray(row.movies)) {
      allMovies.push(...row.movies);
    }
  });
  
  allMovies.push(...movies);
  
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 8);
};