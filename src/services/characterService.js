// Character API Service - Simulates axios requests
import MondstadtData from '../Constants/Mondstadt.json';
import LiyueData from '../Constants/Liyue.json';
import InazumaData from '../Constants/Inazuma.json';
import SumeruData from '../Constants/Sumeru.json';
import FontaineData from '../Constants/Fontaine.json';
import NatlanData from '../Constants/Natlan.json';
import NodKraiData from '../Constants/NodKrai.json';

// Map region names to their data files
const regionDataMap = {
  'Mondstadt': MondstadtData,
  'Liyue': LiyueData,
  'Inazuma': InazumaData,
  'Sumeru': SumeruData,
  'Fontaine': FontaineData,
  'Natlan': NatlanData,
  'Nod-Krai': NodKraiData,
};

/**
 * Simulates an axios GET request to fetch characters by region
 * @param {string} region - The region name (e.g., 'Mondstadt', 'Liyue')
 * @returns {Promise} Promise that resolves with character data
 */
export const getCharactersByRegion = async (region) => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const normalizedRegion = normalizeRegionName(region);
        const characters = regionDataMap[normalizedRegion] || [];
        
        if (characters.length === 0) {
          reject(new Error(`No characters found for region: ${region}`));
          return;
        }
        
        resolve({
          data: characters,
          status: 200,
          statusText: 'OK',
        });
      } catch (error) {
        reject(error);
      }
    }, 300); // Simulate 300ms network delay
  });
};

/**
 * Fetches all characters from all regions
 * @returns {Promise} Promise that resolves with all character data
 */
export const getAllCharacters = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const allCharacters = Object.values(regionDataMap).flat();
        resolve({
          data: allCharacters,
          status: 200,
          statusText: 'OK',
        });
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};

/**
 * Fetches a single character by name
 * @param {string} characterName - The character's name
 * @returns {Promise} Promise that resolves with character data
 */
export const getCharacterByName = async (characterName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const allCharacters = Object.values(regionDataMap).flat();
        const character = allCharacters.find(
          (char) => char.name.toLowerCase() === characterName.toLowerCase()
        );
        
        if (!character) {
          reject(new Error(`Character not found: ${characterName}`));
          return;
        }
        
        resolve({
          data: character,
          status: 200,
          statusText: 'OK',
        });
      } catch (error) {
        reject(error);
      }
    }, 300);
  });
};

/**
 * Normalizes region names to match the data map keys
 * @param {string} region - The region name
 * @returns {string} Normalized region name
 */
const normalizeRegionName = (region) => {
  const regionMap = {
    'MondStadt': 'Mondstadt',
    'Mondstadt': 'Mondstadt',
    'Liyue': 'Liyue',
    'Inazuma': 'Inazuma',
    'Sumeru': 'Sumeru',
    'Fontaine': 'Fontaine',
    'Natlan': 'Natlan',
    'Nod-Krai': 'Nod-Krai',
    'NodKrai': 'Nod-Krai',
  };
  
  return regionMap[region] || region;
};

/**
 * Get available regions
 * @returns {string[]} Array of available region names
 */
export const getAvailableRegions = () => {
  return Object.keys(regionDataMap);
};

