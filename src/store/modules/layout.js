
/* eslint-disable */ 
import config from '../../data/layout.json';


const state = {
	layout : config,
    sidebarType : localStorage.getItem('SidebarType') || 'default',
	boxlayout : true,
	footer: '',
	svg:'stroke-svg',
	sidebar:'compact-sidebar1'
};


const getters = {
	footer:(state)=>{
		return state.footer
		},
			sidebar:(state)=>{
				return state.sidebar
				
			},
};

const mutations = {
	setFooter:(state,payload)=>{
		state.footer=payload.class
	},
	set: (state) => {
		document.body.className = state.layout.color.mix_layout;
		document.body.setAttribute('main-theme-layout', 'compact-wrapper');
		document.getElementsByTagName('html')[0].setAttribute('dir', state.layout.settings.layout_type);
		var primaryColor = localStorage.getItem('primary_color') || state.layout.color.primary_color;
		var secondaryColor = localStorage.getItem('secondary_color') || state.layout.color.secondary_color;
		var layoutVersion = localStorage.getItem('layoutVersion') || state.layout.color.layout_version;
		if (primaryColor || secondaryColor) {
			addStyle(primaryColor, secondaryColor);
			if (layoutVersion)
				document.body.className = layoutVersion;
		}
	},
	setLayoutType: (state, payload) => {
		
		document.body.classList.remove('rtl')
		document.body.classList.remove('ltr')
		document.body.classList.remove('boxed')
		document.documentElement.removeAttribute('dir')
		payload.class && document.body.setAttribute('class', payload.class);
		payload.class && document.documentElement.setAttribute('dir', payload.class);

	
		state.layout.settings.layout_type = payload;
	},
	setLayout: (state, payload) => { 
		 if(document.body.className == 'box-layout'){
        document.body.className = 'box-layout '+ payload.class

      }
      else{

        document.body.className = payload.class;
      }
	},
	setColorScheme: (state, payload) => {
		setColor(state, payload);
		state.primaryColor = payload.primary;
		state.secondaryColor = payload.secondary;
		state.layout.color.layout_version = 'light';
		localStorage.setItem('layoutVersion', state.layout.color.layout_version);
	},
	setColorDarkScheme: (state, payload) => {
		setColor(state, payload);
		state.layout.color.layout_version = 'dark-only';
		localStorage.setItem('layoutVersion', state.layout.color.layout_version);
	},
	
	setCustomizeSidebarType: (state, payload) => {
	
			localStorage.setItem('SidebarType', payload);
		
	},
	setSvg(state,payload){
		state.svg=payload
		state.layout.settings.sidebar_setting = payload
	}
};

const actions = {
	set: (context) => {
		context.commit('set');
	},
	setLayoutType: (context, payload) => {
		context.commit('setLayoutType',payload);
	},
	setLayout: (context, payload) => {
		context.commit('setLayout',payload);
	},
	setColorScheme: (context, payload) => {
		context.commit('setColorScheme',payload);
	},
	setColorDarkScheme: (context, payload) => {
		context.commit('setColorDarkScheme',payload);
	},

	setCustomizeSidebarType: (context, payload) => {
		context.commit('setCustomizeSidebarType',payload);
	},
	setSvg(context,payload){
		context.commit('setSvg',payload)
	}
};

function addStyle(primary, secondary) {
	document.documentElement.style.setProperty('--theme-deafult', primary);
	document.documentElement.style.setProperty('--theme-secondary', secondary);
}

function setColor(state, color) {
	addStyle(color.primary, color.secondary);
	localStorage.setItem('primary_color', color.primary);
	localStorage.setItem('secondary_color', color.secondary);
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
